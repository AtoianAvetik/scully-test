import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: "./src",
    projectName: "scully-test",
    outDir: './dist/static',
    routes: {
        '/blog/:postId': {
            type: 'contentFolder',
            postId: {
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
