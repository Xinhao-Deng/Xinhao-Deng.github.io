'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';
import PublicationCard from '@/components/publications/PublicationCard';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({
    publications,
    title,
    enableOnePageMode = false,
}: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                <Link
                    href={enableOnePageMode ? '/#publications' : '/publications'}
                    prefetch
                    className="rounded text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:text-accent-dark hover:shadow-sm"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <p className="mb-4 text-xs text-neutral-500 dark:text-neutral-500">
                <sup>*</sup> Equal contribution &nbsp; &nbsp; <sup>✉</sup> Corresponding author
            </p>
            <div className="space-y-6">
                {publications.map((publication, index) => (
                    <PublicationCard
                        key={publication.id}
                        publication={publication}
                        number={publications.length - index}
                        index={index}
                    />
                ))}
            </div>
        </motion.section>
    );
}
