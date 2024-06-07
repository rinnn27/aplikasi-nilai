function simpan() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var presensiTeori = parseInt(document.getElementById('presensi-teori').value);
    var tugasTeori = parseInt(document.getElementById('tugas-teori').value);
    var utsTeori = parseInt(document.getElementById('uts-teori').value);
    var uasTeori = parseInt(document.getElementById('uas-teori').value);
    var presensiPraktik = parseInt(document.getElementById('presensi-praktik').value);
    var tugasPraktik = parseInt(document.getElementById('tugas-praktik').value);
    var utsPraktik = parseInt(document.getElementById('uts-praktik').value);
    var uasPraktik = parseInt(document.getElementById('uas-praktik').value);

    var totalPresensi = (presensiTeori + presensiPraktik) / 2;
    var totalTugas = (tugasTeori + tugasPraktik) / 2;
    var totalUTS = (utsTeori + utsPraktik) / 2;
    var totalUAS = (uasTeori + uasPraktik) / 2;

    var finalScore = (totalPresensi * 0.1) + (totalTugas * 0.2) + (totalUTS * 0.3) + (totalUAS * 0.4);
    var grade = calculateGrade(finalScore);

    var table = document.getElementById('rincian-nilai');
    var row = table.insertRow(-1);

    row.insertCell(0).innerHTML = table.rows.length;
    row.insertCell(1).innerHTML = nim;
    row.insertCell(2).innerHTML = nama;
    row.insertCell(3).innerHTML = totalPresensi.toFixed(2);
    row.insertCell(4).innerHTML = totalTugas.toFixed(2);
    row.insertCell(5).innerHTML = totalUTS.toFixed(2);
    row.insertCell(6).innerHTML = totalUAS.toFixed(2);
    row.insertCell(7).innerHTML = finalScore.toFixed(2);
    row.insertCell(8).innerHTML = grade;
}

function calculateGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'E';
    }
}

document.getElementById('batal').addEventListener('click', function () {
    document.getElementById('nilaiForm').reset();
});

document.getElementById('reset').addEventListener('click', function () {
    const tableBody = document.getElementById('rincian-nilai');
    tableBody.innerHTML = '';
});