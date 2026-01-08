import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug } from "@/data/articles";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const BlogPost = () => {
   const { slug } = useParams<{ slug: string }>();
   const article = slug ? getArticleBySlug(slug) : undefined;

   if (!article) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4">
               <h1 className="text-2xl font-medium">Article not found</h1>
               <Link to="/" className="text-text-secondary hover:text-foreground transition-colors inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
               </Link>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-background">
         {/* Minimal header for article pages */}
         <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border-subtle">
            <div className="container max-w-3xl">
               <div className="flex items-center justify-between h-16">
                  <Link to="/#writing" className="text-text-secondary hover:text-foreground transition-colors inline-flex items-center gap-2 text-sm">
                     <ArrowLeft className="h-4 w-4" />
                     Back
                  </Link>
                  <ThemeToggle />
               </div>
            </div>
         </header>

         <main className="pt-32 pb-20">
            <article className="container max-w-3xl">
               {/* Article header */}
               <header className="mb-12 space-y-6">
                  <div className="flex items-center gap-3 text-text-tertiary text-sm">
                     <span>{article.date}</span>
                     <span>·</span>
                     <span>{article.readTime} read</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">{article.title}</h1>

                  <p className="text-lg text-text-secondary leading-relaxed">{article.description}</p>

                  {article.tags && (
                     <div className="flex gap-2">
                        {article.tags.map((tag) => (
                           <span key={tag} className="text-xs text-text-tertiary bg-secondary px-2.5 py-1 rounded">
                              {tag}
                           </span>
                        ))}
                     </div>
                  )}
               </header>

               {/* Article content */}
               <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <div className="space-y-6 text-text-secondary leading-relaxed">
                     {article.content.split("\n\n").map((paragraph, index) => {
                        // Handle headers
                        if (paragraph.startsWith("## ")) {
                           return (
                              <h2 key={index} className="text-xl font-semibold text-foreground mt-12 mb-4 first:mt-0">
                                 {paragraph.replace("## ", "")}
                              </h2>
                           );
                        }
                        if (paragraph.startsWith("### ")) {
                           return (
                              <h3 key={index} className="text-lg font-medium text-foreground mt-8 mb-3">
                                 {paragraph.replace("### ", "")}
                              </h3>
                           );
                        }
                        // Handle code blocks
                        if (paragraph.startsWith("```")) {
                           const code = paragraph.replace(/```\w*\n?/g, "").trim();
                           return (
                              <pre key={index} className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm font-mono">
                                 <code>{code}</code>
                              </pre>
                           );
                        }
                        // Handle lists
                        if (paragraph.includes("\n- ")) {
                           const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                           return (
                              <ul key={index} className="space-y-2 pl-4">
                                 {items.map((item, i) => (
                                    <li key={i} className="list-disc list-outside">
                                       {formatInlineStyles(item.replace("- ", ""))}
                                    </li>
                                 ))}
                              </ul>
                           );
                        }
                        // Handle horizontal rules
                        if (paragraph.trim() === "---") {
                           return <hr key={index} className="my-12 border-border-subtle" />;
                        }
                        // Handle emphasis/italics at paragraph level
                        if (paragraph.trim().startsWith("*") && paragraph.trim().endsWith("*")) {
                           return (
                              <p key={index} className="italic text-text-tertiary">
                                 {paragraph.trim().slice(1, -1)}
                              </p>
                           );
                        }
                        // Regular paragraphs
                        if (paragraph.trim()) {
                           return <p key={index}>{formatInlineStyles(paragraph)}</p>;
                        }
                        return null;
                     })}
                  </div>
               </div>
            </article>
         </main>

         <Footer />
      </div>
   );
};

// Helper to handle inline formatting like **bold** and `code`
function formatInlineStyles(text: string): React.ReactNode {
   const parts: React.ReactNode[] = [];
   let remaining = text;
   let key = 0;

   while (remaining.length > 0) {
      // Check for bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Check for inline code
      const codeMatch = remaining.match(/`(.+?)`/);

      if (boldMatch && (!codeMatch || boldMatch.index! < codeMatch.index!)) {
         const beforeBold = remaining.slice(0, boldMatch.index);
         if (beforeBold) parts.push(beforeBold);
         parts.push(
            <strong key={key++} className="font-semibold text-foreground">
               {boldMatch[1]}
            </strong>
         );
         remaining = remaining.slice(boldMatch.index! + boldMatch[0].length);
      } else if (codeMatch) {
         const beforeCode = remaining.slice(0, codeMatch.index);
         if (beforeCode) parts.push(beforeCode);
         parts.push(
            <code key={key++} className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">
               {codeMatch[1]}
            </code>
         );
         remaining = remaining.slice(codeMatch.index! + codeMatch[0].length);
      } else {
         parts.push(remaining);
         break;
      }
   }

   return parts.length > 0 ? parts : text;
}

export default BlogPost;
