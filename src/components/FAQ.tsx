import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
	{
		question: 'Pourquoi offrir un livre biographique personnalisé ?',
		answer:
			'Parce que certains souvenirs méritent d’être transmis, partagés, célébrés. MyWai vous aide à créer une biographie sur mesure, à partir des mots de ceux qui connaissent le mieux la personne à célébrer. Famille, amis, collègues : chacun peut y ajouter une anecdote, une photo, un message. Le tout est rédigé avec soin, mis en page comme un véritable livre, puis imprimé et livré chez vous.',
	},
	{
		question: 'Puis-je commander d’autres exemplaires du livre ?',
		answer:
			'Oui, bien sûr. Une fois le livre finalisé, vous pouvez commander autant d\'exemplaires supplémentaires que vous souhaitez. Tarif dégressif à partir de 2 livres.',
	},
	{
		question: 'À qui appartient le contenu final du livre ?',
		answer:
			'Le texte généré par MyWai vous appartient. Vous pouvez l’imprimer, le partager ou le modifier à tout moment. Rien n’est publié sans votre validation finale.',
	},
	{
		question: 'Que deviennent les données et contributions collectées ?',
		answer:
			'Tous les contenus partagés (textes, photos, messages) sont confidentiels, sécurisés, et supprimables à tout moment. Ils ne sont jamais utilisés à d\'autres fins.',
	},
	{
		question: 'Peut-on modifier le livre une fois généré ?',
		answer:
			'Oui. Vous pouvez relire, corriger, enrichir ou réorganiser les chapitres avant impression. C’est votre livre, notre IA est juste là pour vous aider à l’écrire.',
	},
	{
		question: 'Et si je veux créer un livre pour quelqu’un d’autre ?',
		answer:
			'C’est tout à fait possible ! Vous pouvez offrir un livre, créer un projet à plusieurs (avec cagnotte ou pas), et inviter les proches à y contribuer facilement.',
	},
];

const FAQItem = ({ item, isOpen, onClick }) => {
	return (
		<div className="border-b border-gray-200 py-6 transition-all duration-300 ease-in-out">
			<button
				onClick={onClick}
				className="flex justify-between items-center w-full text-left focus:outline-none"
			>
				<h3 className="text-lg md:text-xl font-display font-semibold text-mywai-dark hover:text-mywai transition-colors duration-200">
					{item.question}
				</h3>
				<span>
					{isOpen ? (
						<ChevronUp className="h-6 w-6 text-mywai" />
					) : (
						<ChevronDown className="h-6 w-6 text-gray-500" />
					)}
				</span>
			</button>
			<div
				className={`overflow-hidden transition-all duration-500 ease-in-out ${
					isOpen ? 'max-h-screen mt-4' : 'max-h-0'
				}`}
			>
				<p className="text-muted-foreground pt-2 pr-6">{item.answer}</p>
			</div>
		</div>
	);
};

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleItemClick = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			className="section-padding bg-gradient-to-b from-cream to-white"
			id="faq"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="section-title">Questions fréquentes</h2>
					<p className="section-subtitle max-w-2xl mx-auto">
						Trouvez ici les réponses à vos interrogations les plus courantes sur
						MyWai et la création de votre livre biographique.
					</p>
				</div>
				<div className="max-w-3xl mx-auto bg-white p-4 sm:p-8 rounded-xl shadow-xl">
					{faqData.map((item, index) => (
						<FAQItem
							key={index}
							item={item}
							isOpen={openIndex === index}
							onClick={() => handleItemClick(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
