const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname)); // Phục vụ file tĩnh

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
