

setInterval(() => {
    console.log("Run Interval");
}, 2000);

process.nextTick(() => {
    console.log("Before next event loop");
});

// next tick က setinterval မလုပ်ခင်မှာ လုပ်