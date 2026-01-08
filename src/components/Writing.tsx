import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";

const Writing = () => {
    return (
        <section className="py-20 md:py-28 border-t border-border-subtle">
            <div className="container max-w-4xl">
                <div className="mb-12">
                    <h2>Writing</h2>
                    <p className="mt-3 text-text-secondary max-w-xl">Technical articles on systems, architecture, and engineering leadership.</p>
                </div>

                <div className="space-y-1">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            to={`/writing/${article.slug}`}
                            className="group block py-6 border-b border-border-subtle last:border-b-0"
                        >
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-medium group-hover:text-text-secondary transition-colors">{article.title}</h3>
                                        <ArrowUpRight className="h-4 w-4 text-text-tertiary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                    </div>
                                    <div className="flex items-center gap-3 text-text-tertiary text-sm shrink-0">
                                        <span>{article.date}</span>
                                        <span className="hidden sm:inline">·</span>
                                        <span className="hidden sm:inline">{article.readTime}</span>
                                    </div>
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">{article.description}</p>
                                {article.tags && (
                                    <div className="flex gap-2 pt-1">
                                        {article.tags.map((tag) => (
                                            <span key={tag} className="text-xs text-text-tertiary bg-secondary px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
