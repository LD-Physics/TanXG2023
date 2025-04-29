// 示例：动态加载PDF列表（实际使用时需从uploads目录获取文件）
document.addEventListener('DOMContentLoaded', () => {
    const pdfList = document.getElementById('pdf-list');
    
    // 示例数据（实际应从uploads目录读取）
    const pdfFiles = [
        { name: "我的第一篇文章", file: "uploads/article1.pdf" },
        { name: "技术分享", file: "uploads/tech-share.pdf" }
    ];
    
    pdfFiles.forEach(pdf => {
        const pdfItem = document.createElement('div');
        pdfItem.className = 'pdf-item';
        
        pdfItem.innerHTML = `
            <h2 class="pdf-title">${pdf.name}</h2>
            <a href="${pdf.file}" class="pdf-link" target="_blank">查看PDF</a>
        `;
        
        pdfList.appendChild(pdfItem);
    });
});
