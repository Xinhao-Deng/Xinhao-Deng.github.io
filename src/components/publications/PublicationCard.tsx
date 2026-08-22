'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    BookOpenIcon,
    ClipboardDocumentIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { cn } from '@/lib/utils';
import { useMessages } from '@/lib/i18n/useMessages';
import FormattedBibTeXText from './FormattedBibTeXText';

interface PublicationCardProps {
    publication: Publication;
    number: number;
    index?: number;
}

export default function PublicationCard({
    publication: pub,
    number,
    index = 0,
}: PublicationCardProps) {
    const messages = useMessages();
    const [showAbstract, setShowAbstract] = useState(false);
    const [showBibtex, setShowBibtex] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all duration-200"
            data-publication-id={pub.id}
        >
            <div className="flex flex-col md:flex-row gap-6">
                {pub.preview && (
                    <div className="w-full md:w-48 flex-shrink-0">
                        <div className="aspect-video md:aspect-[4/3] relative rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                            <Image
                                src={`/papers/${pub.preview}`}
                                alt={pub.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                )}
                <div className="flex-grow">
                    <h3 className="text-base font-semibold text-primary mb-2 leading-tight">
                        <span className="text-neutral-500 dark:text-neutral-400 mr-2">[{number}]</span>
                        <FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} />
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        {pub.authors.map((author, authorIndex) => (
                            <span key={authorIndex}>
                                <span className={`${author.isHighlighted ? 'font-semibold text-accent' : ''}`}>
                                    {author.name}
                                </span>
                                {author.isCoAuthor && (
                                    <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-400'}`}>*</sup>
                                )}
                                {author.isCorresponding && (
                                    <sup
                                        className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-400'}`}
                                        title="Corresponding author"
                                    >
                                        ✉
                                    </sup>
                                )}
                                {authorIndex < pub.authors.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-600 mb-3">
                        {pub.type === 'preprint'
                            ? `arXiv ${pub.year}`
                            : `${pub.journal || pub.conference} ${pub.year}`}
                        {pub.ccfRank && (
                            <span className="ml-2 inline-flex items-center rounded border border-accent/40 px-1.5 py-0.5 text-[11px] font-semibold leading-none text-accent">
                                CCF-{pub.ccfRank}
                            </span>
                        )}
                    </p>

                    {pub.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-4 line-clamp-3">
                            {pub.description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {pub.url && (
                            <a
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white transition-colors"
                            >
                                [PDF]
                            </a>
                        )}
                        {pub.doi && (
                            <a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white transition-colors"
                            >
                                DOI
                            </a>
                        )}
                        {pub.code && (
                            <a
                                href={pub.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white transition-colors"
                            >
                                {messages.publications.code}
                            </a>
                        )}
                        {pub.abstract && (
                            <button
                                onClick={() => setShowAbstract(!showAbstract)}
                                className={cn(
                                    'inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors',
                                    showAbstract
                                        ? 'bg-accent text-white'
                                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white'
                                )}
                            >
                                <DocumentTextIcon className="h-3 w-3 mr-1.5" />
                                {messages.publications.abstract}
                            </button>
                        )}
                        {pub.bibtex && (
                            <button
                                onClick={() => setShowBibtex(!showBibtex)}
                                className={cn(
                                    'inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors',
                                    showBibtex
                                        ? 'bg-accent text-white'
                                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white'
                                )}
                            >
                                <BookOpenIcon className="h-3 w-3 mr-1.5" />
                                {messages.publications.bibtex}
                            </button>
                        )}
                    </div>

                    <AnimatePresence>
                        {showAbstract && pub.abstract ? (
                            <motion.div
                                key="abstract"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-4"
                            >
                                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                    <p className="text-sm text-neutral-600 dark:text-neutral-500 leading-relaxed">
                                        {pub.abstract}
                                    </p>
                                </div>
                            </motion.div>
                        ) : null}
                        {showBibtex && pub.bibtex ? (
                            <motion.div
                                key="bibtex"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-4"
                            >
                                <div className="relative bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                    <pre className="text-xs text-neutral-600 dark:text-neutral-500 overflow-x-auto whitespace-pre-wrap font-mono">
                                        {pub.bibtex}
                                    </pre>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(pub.bibtex || '')}
                                        className="absolute top-2 right-2 p-1.5 rounded-md bg-white dark:bg-neutral-700 text-neutral-500 hover:text-accent shadow-sm border border-neutral-200 dark:border-neutral-600 transition-colors"
                                        title={messages.common.copyToClipboard}
                                    >
                                        <ClipboardDocumentIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
