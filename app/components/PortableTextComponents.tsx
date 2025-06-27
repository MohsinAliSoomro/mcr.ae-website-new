// components/PortableTextComponents.tsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PortableTextComponents = {
    types: {
        image: ({ value }: any) => (
            <div className="w-full h-[28em] my-6 overflow-hidden rounded-lg">
                <img
                    src={value?.asset?.url}
                    alt={value?.alt || 'Post image'}
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>
        ),
        code: ({ value }: any) => {
            if (!value?.code) return null;

            return (
                <div className="my-6 rounded-lg overflow-hidden">
                    <SyntaxHighlighter language={value.language || 'javascript'}
                        style={oneDark}
                    >
                        {value.code}
                    </SyntaxHighlighter>
                </div>
            );
        },

        // ✅ Table rendering
        table: ({ value }: any) => {
            return (
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full border border-gray-300 text-sm text-left">
                        <tbody>
                            {value?.rows?.map((row: any, rowIndex: number) => (
                                <tr key={rowIndex}>
                                    {row?.cells?.map((cell: string, cellIndex: number) => (
                                        <td
                                            key={cellIndex}
                                            className="border border-gray-300 px-4 py-2"
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        },



    },
    block: {
        h1: ({ children }: any) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-semibold my-3">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-lg font-medium my-2">{children}</h4>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 pl-4 italic text-gray-600 my-4">{children}</blockquote>
        ),
        normal: ({ children }: any) => <p className="text-base my-4">{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-5 my-4">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="text-base my-2">{children}</li>,
    },
    marks: {
        link: ({ value, children }: any) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                {children}
            </a>
        ),
    },
};

export default PortableTextComponents;
