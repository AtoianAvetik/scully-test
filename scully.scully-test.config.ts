import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: "./src",
    projectName: "scully-test",
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
        "/users/:userId": {
            type: "json",
            userId: {
                url: 'https://jsonplaceholder.typicode.com/users',
                property: 'id'
            }
        }
    }
};
