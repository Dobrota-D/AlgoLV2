module.exports = {
    benchmark: (program) => {
        let start = new Date().getTime();
        try {
            program();
        } finally {
            let stop = new Date().getTime();
            console.log("\n Benchmark" + (stop - start) + "ms");
        }
    }
}
