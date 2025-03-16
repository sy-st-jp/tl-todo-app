const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// features 配下のディレクトリ名を取得
const featuresDir = path.join(__dirname, '../src/features');
const featureDirs = fs.readdirSync(featuresDir).filter((dir) => {
    return fs.statSync(path.join(featuresDir, dir)).isDirectory();  // ディレクトリのみをフィルタリング
});

// 各 feature に対して API 型を生成
featureDirs.forEach((featureName) => {
    const inputPath = path.join(featuresDir, featureName, 'api/openapi/index.yaml');
    const outputPath = path.join(featuresDir, featureName, 'api/types/schema/index.d.ts');

    if (fs.existsSync(inputPath)) {
        const command = `npx openapi-typescript ${inputPath} -o ${outputPath}`;

        console.log(`Generating API types for feature: ${featureName}`);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command for feature ${featureName}: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr for ${featureName}: ${stderr}`);
                return;
            }
            console.log(`Successfully generated API types for feature: ${featureName}`);
        });
    } else {
        console.warn(`No OpenAPI spec found for feature: ${featureName}`);
    }
});
