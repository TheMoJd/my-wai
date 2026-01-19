
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Button from "@/components/ui/button/Button";

interface Blogue {
    id: string;
    title: string;
    description: string;
    published_at: string;
    slug: string;
}

const LatestArticles = () => {
    const [articles, setArticles] = useState<Blogue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestArticles = async () => {
            try {
                const { data, error } = await supabase
                    .from('blogues')
                    .select('*')
                    .order('published_at', { ascending: false })
                    .limit(3);

                if (error) {
                    console.error('Error fetching latest articles:', error);
                } else {
                    setArticles(data || []);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestArticles();
    }, []);

    if (loading || articles.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-cream/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                        Nos derniers conseils
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Découvrez nos articles sur la transmission, la mémoire et l’histoire familiale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link to={`/blogue/${article.slug}`} key={article.id} className="group h-full">
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-none bg-white shadow-sm flex flex-col">
                                <CardHeader>
                                    <div className="text-xs text-mywai font-medium mb-2 uppercase tracking-wider">
                                        {format(new Date(article.published_at), "d MMMM yyyy", { locale: fr })}
                                    </div>
                                    <CardTitle className="text-xl font-display font-bold group-hover:text-mywai transition-colors line-clamp-2">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                        {article.description}
                                    </p>
                                    <div className="text-sm font-semibold text-mywai group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                        Lire la suite <span>→</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/blogues">
                        <Button variant="outline" className="border-mywai text-mywai hover:bg-mywai hover:text-white">
                            Voir tous les articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestArticles;
