import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-14 mx-auto'>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h4 className='text-left text-xl font-bold my-3'>Q1. Difference between Nodejs and JavaScript : </h4>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                JavaScript
                            </th>
                            <th scope="col" class="px-6 py-3">
                                NodeJS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                It is basically used on the client-side.
                            </td>
                            <td class="px-6 py-4">
                                It is mostly used on the server-side.

                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Javascript can only be run in the browsers.
                            </td>
                            <td class="px-6 py-4">
                                We can run Javascript outside the browser with the help of NodeJS.
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Javascript is a programming language that is used for writing scripts on the website.
                            </td>
                            <td class="px-6 py-4">
                                NodeJS is a Javascript runtime environment.
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Javascript is capable enough to add HTML and play with the DOM.
                            </td>
                            <td class="px-6 py-4">
                                Nodejs does not have capability to add HTML tags.
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Javascript is used in frontend development.
                            </td>
                            <td class="px-6 py-4">
                                Nodejs is used in server-side development.
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                            </td>
                            <td class="px-6 py-4">
                                V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                            </td>
                            <td class="px-6 py-4">
                                Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                            </td>
                            <td class="px-6 py-4">
                                Nodejs is written in C, C++ and Javascript.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                <h4 className='text-left text-xl font-bold my-3'>Q2.  Differences between SQL and noSQL databases. </h4>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                SQL
                            </th>
                            <th scope="col" class="px-6 py-3">
                                noSQL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                            </td>
                            <td class="px-6 py-4">
                                Non-relational or distributed database system.

                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                These databases have fixed or static or predefined schema
                            </td>
                            <td class="px-6 py-4">
                                They have dynamic schema
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                These databases are not suited for hierarchical data storage.
                            </td>
                            <td class="px-6 py-4">
                                These databases are best suited for hierarchical data storage.                           </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Follows ACID property
                            </td>
                            <td class="px-6 py-4">
                                Follows CAP(consistency, availability, partition tolerance)
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                Vertically Scalable
                            </td>
                            <td class="px-6 py-4">
                                Horizontally scalable
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td class="px-6 py-4">
                                These databases are best suited for complex queries
                            </td>
                            <td class="px-6 py-4">
                                These databases are not so good for complex queries                    </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className='mt-8'>
                <h4 className='text-left text-xl font-bold my-3'>Q3.What is the purpose of jwt and how does it work</h4>

                <p className='text-left'>JSON Web Token is a standard used to create access tokens for an application.

                    It works this way: the server generates a token that certifies the user identity, and sends it to the client.

                    The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.

                    This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests either to a REST or a GraphQL API.</p>
            </div>
        </div>
    );
};

export default Blogs;