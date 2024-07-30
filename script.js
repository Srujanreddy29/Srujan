function generateDescription() {
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const achievements = document.getElementById('achievements').value.trim();

    if (!name || !title || !experience || !skills || !achievements) {
        alert('Please fill in all fields.');
        return;
    }

    const description = `
        <strong>${name}</strong> is currently working as a <strong>${title}</strong>.
        <br><br>
        <strong>Experience:</strong>
        <p>${experience}</p>
        <br>
        <strong>Skills:</strong>
        <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
        <br>
        <strong>Achievements:</strong>
        <p>${achievements}</p>
    `;

    document.getElementById('generatedDescription').innerHTML = description;
    document.getElementById('downloadPdf').style.display = 'block';
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const achievements = document.getElementById('achievements').value.trim();

    const description = `
        ${name} is currently working as a ${title}.
        
        Experience:
        ${experience}
        
        Skills:
        ${skills.split(',').map(skill => skill.trim()).join(', ')}
        
        Achievements:
        ${achievements}
    `;

    doc.text(description, 10, 10);
    doc.save('LinkedIn_Description.pdf');
}
