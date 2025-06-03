import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type FAQItemProps = {
	item: {
		question: string;
		answer: string;
	};
	isOpen: boolean;
	onClick: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => {
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
	const { t } = useTranslation();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const faqData = t('faq_section.questions', { returnObjects: true }) as Array<{
		question: string;
		answer: string;
	}>;

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
					<h2 className="section-title">{t('faq_section.title')}</h2>
					<p className="section-subtitle max-w-2xl mx-auto">
						{t('faq_section.subtitle')}
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
