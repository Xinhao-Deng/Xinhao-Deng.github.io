'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    BookOpenIcon,
    CalendarIcon,
    FunnelIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { PublicationPageConfig } from '@/types/page';
import { cn } from '@/lib/utils';
import { useMessages } from '@/lib/i18n/useMessages';
import PublicationCard from './PublicationCard';

interface PublicationsListProps {
    config: PublicationPageConfig;
    publications: Publication[];
    embedded?: boolean;
}

export default function PublicationsList({ config, publications, embedded = false }: PublicationsListProps) {
    const messages = useMessages();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [selectedType, setSelectedType] = useState<string | 'all'>('all');
    const [showFilters, setShowFilters] = useState(false);

    const years = useMemo(() => {
        const uniqueYears = Array.from(new Set(publications.map((publication) => publication.year)));
        return uniqueYears.sort((a, b) => b - a);
    }, [publications]);

    const types = useMemo(() => {
        const uniqueTypes = Array.from(new Set(publications.map((publication) => publication.type)));
        return uniqueTypes.sort();
    }, [publications]);

    const filteredPublications = useMemo(() => {
        const normalizedQuery = searchQuery.toLowerCase();

        return publications.filter((publication) => {
            const matchesSearch =
                publication.title.toLowerCase().includes(normalizedQuery) ||
                publication.authors.some((author) => author.name.toLowerCase().includes(normalizedQuery)) ||
                publication.journal?.toLowerCase().includes(normalizedQuery) ||
                publication.conference?.toLowerCase().includes(normalizedQuery);
            const matchesYear = selectedYear === 'all' || publication.year === selectedYear;
            const matchesType = selectedType === 'all' || publication.type === selectedType;

            return matchesSearch && matchesYear && matchesType;
        });
    }, [publications, searchQuery, selectedType, selectedYear]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="mb-8">
                <h1 className={`${embedded ? 'text-2xl' : 'text-4xl'} font-serif font-bold text-primary mb-4`}>
                    {config.title}
                </h1>
                {config.description && (
                    <p className={`${embedded ? 'text-base' : 'text-lg'} text-neutral-600 dark:text-neutral-500 max-w-2xl`}>
                        {config.description}
                    </p>
                )}
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <sup>*</sup> Equal contribution &nbsp; &nbsp; <sup>✉</sup> Corresponding author
                </p>
            </div>

            <div className="mb-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                        <input
                            type="text"
                            placeholder={messages.publications.searchPlaceholder}
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-accent dark:border-neutral-800 dark:bg-neutral-900"
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={cn(
                            'flex items-center justify-center rounded-lg border px-4 py-2 transition-all duration-200',
                            showFilters
                                ? 'border-accent bg-accent text-white'
                                : 'border-neutral-200 bg-white text-neutral-600 hover:border-accent hover:text-accent dark:border-neutral-800 dark:bg-neutral-900'
                        )}
                    >
                        <FunnelIcon className="mr-2 h-5 w-5" />
                        {messages.publications.filters}
                    </button>
                </div>

                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-wrap gap-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-800/50">
                                <div className="space-y-2">
                                    <label className="flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        <CalendarIcon className="mr-1 h-4 w-4" /> {messages.publications.year}
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedYear('all')}
                                            className={cn(
                                                'rounded-full px-3 py-1 text-xs transition-colors',
                                                selectedYear === 'all'
                                                    ? 'bg-accent text-white'
                                                    : 'bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                                            )}
                                        >
                                            {messages.common.all}
                                        </button>
                                        {years.map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => setSelectedYear(year)}
                                                className={cn(
                                                    'rounded-full px-3 py-1 text-xs transition-colors',
                                                    selectedYear === year
                                                        ? 'bg-accent text-white'
                                                        : 'bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                                                )}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        <BookOpenIcon className="mr-1 h-4 w-4" /> {messages.publications.type}
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedType('all')}
                                            className={cn(
                                                'rounded-full px-3 py-1 text-xs transition-colors',
                                                selectedType === 'all'
                                                    ? 'bg-accent text-white'
                                                    : 'bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                                            )}
                                        >
                                            {messages.common.all}
                                        </button>
                                        {types.map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedType(type)}
                                                className={cn(
                                                    'rounded-full px-3 py-1 text-xs capitalize transition-colors',
                                                    selectedType === type
                                                        ? 'bg-accent text-white'
                                                        : 'bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                                                )}
                                            >
                                                {type.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="space-y-6">
                {filteredPublications.length === 0 ? (
                    <div className="py-12 text-center text-neutral-500">
                        {messages.publications.noResults}
                    </div>
                ) : (
                    filteredPublications.map((publication, index) => (
                        <PublicationCard
                            key={publication.id}
                            publication={publication}
                            number={filteredPublications.length - index}
                            embedded={embedded}
                            index={index}
                        />
                    ))
                )}
            </div>
        </motion.div>
    );
}
