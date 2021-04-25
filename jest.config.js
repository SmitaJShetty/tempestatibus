module.exports={
    preset: 'ts-jest',
    roots: ['src'],
    globals: {
        'ts-jest':{
            isolatedModules: true
        }
    },
    testMatch: ['<rootDir>/src/__test__/**/*.test.ts'],
    watchPathIgnorePatterns: ['<rootDir>/node_modules/','<rootDir>/proto/'],
    testEnvironment:'node',
    setupFiles:['<rootDir>/src/__test__/.jest/setEnvVars.js']
}   