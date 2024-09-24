module.exports = {
    preset: 'ts-jest',
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    openHandlesTimeout: 2000
};
