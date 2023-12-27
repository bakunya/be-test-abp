export default function getTimestamp() {
	// Mendapatkan waktu saat ini dalam bentuk objek Date
	var currentTime = new Date();

	// Mendapatkan komponen waktu (tahun, bulan, tanggal, jam, menit, detik, milidetik)
	var year = currentTime.getUTCFullYear();
	var month = ('0' + (currentTime.getUTCMonth() + 1)).slice(-2); // Ditambah 1 karena bulan dimulai dari 0
	var day = ('0' + currentTime.getUTCDate()).slice(-2);
	var hours = ('0' + currentTime.getUTCHours()).slice(-2);
	var minutes = ('0' + currentTime.getUTCMinutes()).slice(-2);
	var seconds = ('0' + currentTime.getUTCSeconds()).slice(-2);
	var milliseconds = ('00' + currentTime.getUTCMilliseconds()).slice(-3);

	// Menggabungkan komponen waktu untuk membuat timestamp
	return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds + 'Z';
}