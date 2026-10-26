// DATA HANDBOOK LENGKAP
    const HANDBOOK_DATA = [
      {
        category: "STRUKTUR",
        pages: [
          {
            id: "chain",
            title: "Chain of Command",
            subtitle: "Struktur hirarki kepemimpinan dan jenjang jabatan resmi LSPD.",
            icon: "★",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- High Command -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-amber-500 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-amber-400 uppercase text-sm tracking-wider">High Command</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono">HC</span>
                  </div>
                  <p class="text-xs text-slate-400">Pengambil keputusan tertinggi, perumus kebijakan SOP, dan penanggung jawab penuh departemen.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Chief of Police</strong> <span class="font-mono text-slate-400">COP</span></li>
                    <li class="pt-2 flex justify-between"><strong>Assistant Chief</strong> <span class="font-mono text-slate-400">ACOP</span></li>
                    <li class="pt-2 flex justify-between"><strong>Deputy Chief</strong> <span class="font-mono text-slate-400">DCOP</span></li>
                  </ul>
                </div>

                <!-- Command Staff -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-blue-500 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-blue-400 uppercase text-sm tracking-wider">Command Staff</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono">CS</span>
                  </div>
                  <p class="text-xs text-slate-400">Pengawas operasional harian, pimpinan divisi, dan manajemen perwira lapangan.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Commander</strong> <span class="font-mono text-slate-400">CMDR</span></li>
                    <li class="pt-2 flex justify-between"><strong>Captain</strong> <span class="font-mono text-slate-400">CPT</span></li>
                    <li class="pt-2 flex justify-between"><strong>Lieutenant</strong> <span class="font-mono text-slate-400">LT</span></li>
                  </ul>
                </div>

                <!-- Supervisory & Patrol -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-slate-400 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-slate-300 uppercase text-sm tracking-wider">Supervisory & Field</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 font-mono">FLD</span>
                  </div>
                  <p class="text-xs text-slate-400">Supervisor lapangan, detektif penindak hukum, serta elemen utama patroli rutin.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Sergeant - III</strong> <span class="font-mono text-slate-400">SGT</span></li>
                    <li class="pt-2 flex justify-between"><strong>Police Officer III</strong> <span class="font-mono text-slate-400">PO III</span></li>
                    <li class="pt-2 flex justify-between"><strong>Police Officer II</strong> <span class="font-mono text-slate-400">PO II</span></li>
                    <li class="pt-2 flex justify-between"><strong>Police Officer I</strong> <span class="font-mono text-slate-400">PO I</span></li>
                    <li class="pt-2 flex justify-between"><strong>Cadet / Probationary</strong> <span class="font-mono text-slate-400">CDT</span></li>
                  </ul>
                </div>
              </div>

              <div class="glass-card p-5 rounded-xl border border-slate-800 mt-4 space-y-2">
                <h4 class="text-sm font-bold text-police-gold">Aturan Rantai Komando (Chain of Command Protocol)</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Setiap instruksi dan keluhan wajib disampaikan bertingkat dari bawahan ke atasan langsung. Meloncat hirarki (misal Cadet langsung menghubungi Chief tanpa melalui Sergeant/Lieutenant) merupakan pelanggaran disiplin berat kecuali dalam keadaan darurat ekstrim.
                </p>
              </div>
            `
          },
          {
            id: "divisions",
            title: "Divisi & Biro",
            subtitle: "Unit spesialisasi dan pembagian divisi kerja di lingkungan LSPD.",
            icon: "▣",
            content: `
              <!-- LSPD DIVISION HANDBOOK -->
              <div class="space-y-5">

                <!-- LSPD COMMAND -->
                <details class="glass-card rounded-xl overflow-hidden group" open>
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                        <i data-lucide="shield-check" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">LSPD Command</h3>
                        <p class="text-[11px] text-slate-400">Executive Leadership & Administration</p>
                        <p class="text-xs text-amber-400 mt-1">4 Divisions / Offices</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold font-mono text-sm">BOC</span>
                        <h4 class="font-bold text-white text-sm">Board of Commissioners</h4>
                        <p class="text-[11px] text-slate-400">Executive Oversight</p>
                        <p class="text-xs text-slate-300">Mengawasi kebijakan dan kinerja kepolisian, mengevaluasi kepemimpinan, serta memastikan departemen berjalan sesuai peraturan.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-red-500/10 text-red-400 font-bold font-mono text-sm">CO</span>
                        <h4 class="font-bold text-white text-sm">Chief's Office</h4>
                        <p class="text-[11px] text-slate-400">Department Leadership</p>
                        <p class="text-xs text-slate-300">Memimpin LSPD, menetapkan arahan strategis, mengesahkan kebijakan, dan mengambil keputusan penting bagi departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-blue-500/10 text-blue-400 font-bold font-mono text-sm">ASB</span>
                        <h4 class="font-bold text-white text-sm">Administrative Services Bureau</h4>
                        <p class="text-[11px] text-slate-400">Administrative Management</p>
                        <p class="text-xs text-slate-300">Mengelola dokumen resmi, pengarsipan, laporan internal, administrasi, dan data departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-teal-500/10 text-teal-400 font-bold font-mono text-sm">OO</span>
                        <h4 class="font-bold text-white text-sm">Office of Operations</h4>
                        <p class="text-[11px] text-slate-400">Operational Command</p>
                        <p class="text-xs text-slate-300">Mengatur kegiatan operasional harian, penugasan personel, koordinasi patroli, dan pelaksanaan operasi kepolisian.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- INVESTIGATION & INTELLIGENCE -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <i data-lucide="search" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Investigation &amp; Intelligence</h3>
                        <p class="text-[11px] text-slate-400">Criminal Investigation & Intelligence</p>
                        <p class="text-xs text-purple-400 mt-1">4 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-purple-500/10 text-purple-400 font-bold font-mono text-sm">CID</span>
                        <h4 class="font-bold text-white text-sm">Criminal Investigations Division</h4>
                        <p class="text-[11px] text-slate-400">Criminal Case Investigation</p>
                        <p class="text-xs text-slate-300">Menyelidiki tindak kriminal melalui pengumpulan bukti, pemeriksaan saksi, wawancara tersangka, dan penyusunan berkas perkara.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold font-mono text-sm">IB</span>
                        <h4 class="font-bold text-white text-sm">Investigations Bureau</h4>
                        <p class="text-[11px] text-slate-400">Investigative Coordination</p>
                        <p class="text-xs text-slate-300">Mengoordinasikan penyelidikan lintas unit, menangani kasus kompleks, dan menyatukan informasi investigasi.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-rose-500/10 text-rose-400 font-bold font-mono text-sm">GND</span>
                        <h4 class="font-bold text-white text-sm">Gang &amp; Narcotics Division</h4>
                        <p class="text-[11px] text-slate-400">Gang & Narcotics Enforcement</p>
                        <p class="text-xs text-slate-300">Menyelidiki aktivitas geng kriminal, peredaran narkotika, perang antargeng, dan jaringan kriminal terorganisasi.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-pink-500/10 text-pink-400 font-bold font-mono text-sm">IAD</span>
                        <h4 class="font-bold text-white text-sm">Internal Affairs Division</h4>
                        <p class="text-[11px] text-slate-400">Internal Investigations</p>
                        <p class="text-xs text-slate-300">Menyelidiki dugaan pelanggaran anggota, penyalahgunaan wewenang, korupsi, dan pelanggaran prosedur internal.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- FIELD OPERATIONS -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <i data-lucide="radio-tower" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Field Operations</h3>
                        <p class="text-[11px] text-slate-400">Patrol &amp; Tactical Operations</p>
                        <p class="text-xs text-emerald-400 mt-1">5 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold font-mono text-sm">PD</span>
                        <h4 class="font-bold text-white text-sm">Patrol Division</h4>
                        <p class="text-[11px] text-slate-400">Uniformed Patrol Operations</p>
                        <p class="text-xs text-slate-300">Menjalankan patroli rutin, merespons panggilan darurat, menjaga keamanan wilayah, menghentikan kendaraan, dan menegakkan hukum.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-neutral-500/10 text-neutral-300 font-bold font-mono text-sm">SWAT</span>
                        <h4 class="font-bold text-white text-sm">SWAT Division</h4>
                        <p class="text-[11px] text-slate-400">Special Weapons &amp; Tactics</p>
                        <p class="text-xs text-slate-300">Menangani situasi berisiko tinggi seperti penyanderaan, tersangka bersenjata, penangkapan berbahaya, dan operasi taktis khusus.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold font-mono text-sm">ASD</span>
                        <h4 class="font-bold text-white text-sm">Air Support Division</h4>
                        <p class="text-[11px] text-slate-400">Aerial Operations</p>
                        <p class="text-xs text-slate-300">Menyediakan dukungan udara untuk pengawasan, pencarian orang, pelacakan tersangka, dan bantuan pengejaran.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-lime-500/10 text-lime-400 font-bold font-mono text-sm">SHD</span>
                        <h4 class="font-bold text-white text-sm">Speed Hunter Division</h4>
                        <p class="text-[11px] text-slate-400">Traffic Enforcement &amp; Pursuit</p>
                        <p class="text-xs text-slate-300">Menindak balap liar, pelanggaran kecepatan, pengemudi berbahaya, dan mendukung pengejaran kendaraan sesuai SOP.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-yellow-500/10 text-yellow-400 font-bold font-mono text-sm">SOB</span>
                        <h4 class="font-bold text-white text-sm">Special Operations Bureau</h4>
                        <p class="text-[11px] text-slate-400">Specialized Operations</p>
                        <p class="text-xs text-slate-300">Merencanakan operasi khusus, mendukung operasi lintas divisi, dan menangani penugasan yang membutuhkan strategi khusus.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- PERSONNEL & SUPPORT -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                        <i data-lucide="users" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Personnel &amp; Support</h3>
                        <p class="text-[11px] text-slate-400">Human Resources &amp; Department Services</p>
                        <p class="text-xs text-orange-400 mt-1">5 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-green-500/10 text-green-400 font-bold font-mono text-sm">HRTD</span>
                        <h4 class="font-bold text-white text-sm">Human Resource &amp; Training Division</h4>
                        <p class="text-[11px] text-slate-400">Personnel &amp; Training</p>
                        <p class="text-xs text-slate-300">Mengelola perekrutan, data personel, pendidikan dasar, pelatihan lanjutan, dan evaluasi kemampuan anggota.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-orange-500/10 text-orange-400 font-bold font-mono text-sm">FLD</span>
                        <h4 class="font-bold text-white text-sm">Firearms Licensing Division</h4>
                        <p class="text-[11px] text-slate-400">Firearms Permit Administration</p>
                        <p class="text-xs text-slate-300">Memproses permohonan, verifikasi, perpanjangan, dan pencabutan izin senjata api sesuai peraturan.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 font-bold font-mono text-sm">MRD</span>
                        <h4 class="font-bold text-white text-sm">Media &amp; Relations Division</h4>
                        <p class="text-[11px] text-slate-400">Public Information &amp; Relations</p>
                        <p class="text-xs text-slate-300">Mengelola hubungan masyarakat, konferensi pers, publikasi resmi, dan komunikasi dengan media.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-slate-500/10 text-slate-300 font-bold font-mono text-sm">OSS</span>
                        <h4 class="font-bold text-white text-sm">Office of Support Services</h4>
                        <p class="text-[11px] text-slate-400">Logistics &amp; Department Support</p>
                        <p class="text-xs text-slate-300">Mengelola kendaraan dinas, perlengkapan, fasilitas, dan kebutuhan logistik operasional departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-violet-500/10 text-violet-400 font-bold font-mono text-sm">PSB</span>
                        <h4 class="font-bold text-white text-sm">Professional Standards Bureau</h4>
                        <p class="text-[11px] text-slate-400">Professional Conduct &amp; Compliance</p>
                        <p class="text-xs text-slate-300">Mengawasi standar profesional, etika, kedisiplinan, kepatuhan terhadap SOP, dan kualitas pelayanan kepolisian.</p>
                      </div>

                    </div>
                  </div>
                </details>

              </div>

            `
          },
          {
            id: "callsigns",
            title: "Callsign System",
            subtitle: "Format dan standar pengidentifikasi unit patroli di radio.",
            icon: "◇",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4">
                <h3 class="font-bold text-white text-sm">Format Standar Callsign: <span class="font-mono text-police-gold">[PREFIX] - [UNIT NUMBER]</span></h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-slate-400 font-mono">
                        <th class="p-2">Prefix</th>
                        <th class="p-2">Jenis Unit</th>
                        <th class="p-2">Jumlah Petugas</th>
                        <th class="p-2">Contoh Callsign</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td class="p-2 font-mono font-bold text-red-400">STAFF (S)</td>
                        <td class="p-2">High Command</td>
                        <td class="p-2">2 Officers</td>
                        <td class="p-2 font-mono">7-STAFF-01</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-blue-400">ADAM (A)</td>
                        <td class="p-2">Patroli Mobil Standar</td>
                        <td class="p-2">2 Officers</td>
                        <td class="p-2 font-mono">71-ADAM-12</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-emerald-400">LINCOLN (L)</td>
                        <td class="p-2">Patroli Solo Officer</td>
                        <td class="p-2">1 Officer</td>
                        <td class="p-2 font-mono">71-LINCON-04</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-purple-400">MARY (M)</td>
                        <td class="p-2">Patroli Sepeda Motor</td>
                        <td class="p-2">1 Officer</td>
                        <td class="p-2 font-mono">71-MARY-01</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-red-400">DAVID (D)</td>
                        <td class="p-2">Unit SWAT / Tactical</td>
                        <td class="p-2">Tim SWAT</td>
                        <td class="p-2 font-mono">DAVID-1</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-amber-400">AIR</td>
                        <td class="p-2">Helikopter Support</td>
                        <td class="p-2">2 Aviators</td>
                        <td class="p-2 font-mono">AIR-1</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-slate-400">HENRY (H)</td>
                        <td class="p-2">Interceptor Unit</td>
                        <td class="p-2">1 Interceptor Unit</td>
                        <td class="p-2 font-mono">71-HENRY-10</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-pink-400">GOLF (G)</td>
                        <td class="p-2">	Interceptor High Command</td>
                        <td class="p-2">1 	Interceptor High Command</td>
                        <td class="p-2 font-mono">71-GOLF-30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          }
        ]
      },
      {
        category: "KOMUNIKASI",
        pages: [
          {
            id: "ten-codes",
            title: "Ten Codes",
            subtitle: "Kode radio standar 10-XX untuk komunikasi cepat dan efisien.",
            icon: "×",
            content: `
 
<!-- LSPD RADIO TEN-CODES -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">

  <!-- COMMUNICATION -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-1</span>
    <span class="text-white text-right">Meet me at / Temui saya di lokasi tertentu</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-2</span>
    <span class="text-white text-right">Good Signal / Sinyal radio bagus</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-3</span>
    <span class="text-white text-right">Stop Transmitting / Kosongkan frekuensi radio</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-4</span>
    <span class="text-white text-right">Roger / Diterima dan dimengerti</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-6</span>
    <span class="text-white text-right">Busy / Sibuk, kecuali panggilan darurat</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-7</span>
    <span class="text-white text-right">Out of Service / Tidak bertugas sementara</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-8</span>
    <span class="text-white text-right">In Service / Siap bertugas</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-9</span>
    <span class="text-white text-right">Repeat / Ulangi transmisi terakhir</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-10</span>
    <span class="text-white text-right">Fight in Progress / Keributan sedang berlangsung</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-12</span>
    <span class="text-white text-right">Stand By / Bersiap dan tunggu instruksi</span>
  </div>

  <!-- EMERGENCY & MEDICAL -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-13A</span>
    <span class="text-white text-right">Officer Down / Petugas tertembak atau darurat</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-13B</span>
    <span class="text-white text-right">Officer Down / Petugas kecelakaan atau pingsan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-14</span>
    <span class="text-white text-right">EMS Down / Petugas medis tumbang</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-18</span>
    <span class="text-white text-right">Quickly / Laksanakan dengan segera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-20</span>
    <span class="text-white text-right">Location / Lokasi saat ini</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-22</span>
    <span class="text-white text-right">Cancel / Batalkan instruksi sebelumnya</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-23</span>
    <span class="text-white text-right">Arriving on Location / Tiba di TKP</span>
  </div>

  <!-- VEHICLE & SUSPECT INFORMATION -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-28</span>
    <span class="text-white text-right">Info Plate / Informasi plat nomor kendaraan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-29</span>
    <span class="text-white text-right">Criminal Records / Pemeriksaan catatan kriminal</span>
  </div>

  <!-- ROBBERIES & ARMED SUSPECTS -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-31A</span>
    <span class="text-white text-right">House Robbery / Perampokan rumah</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-31B</span>
    <span class="text-white text-right">Store Robbery / Perampokan toko berlangsung</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-32</span>
    <span class="text-white text-right">Man with Firearms / Orang bersenjata api</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-34</span>
    <span class="text-white text-right">Suspicious Behaviour / Aktivitas mencurigakan terkait narkotika</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-37</span>
    <span class="text-white text-right">Suspicious Vehicle / Kendaraan mencurigakan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-38</span>
    <span class="text-white text-right">High Risk Stop / Penghentian kendaraan berisiko tinggi</span>
  </div>

  <!-- DUTY STATUS -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-41</span>
    <span class="text-white text-right">On Duty / Mulai berdinas</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-42</span>
    <span class="text-white text-right">Off Duty / Mengakhiri dinas</span>
  </div>

  <!-- TRAFFIC & PUBLIC SAFETY -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-45</span>
    <span class="text-white text-right">Illegal Hunting / Perburuan liar</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-47</span>
    <span class="text-white text-right">Injured Person / Terdapat korban cedera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-50</span>
    <span class="text-white text-right">Vehicle Accident / Kecelakaan kendaraan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-52</span>
    <span class="text-white text-right">EMS Needed / Membutuhkan bantuan medis segera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-55</span>
    <span class="text-white text-right">Traffic Stop / Pemberhentian kendaraan biasa</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-57</span>
    <span class="text-white text-right">Chase in Progress / Pengejaran aktif</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-60</span>
    <span class="text-white text-right">Vehicle Description / Deskripsi kendaraan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-61</span>
    <span class="text-white text-right">Subject Description / Deskripsi tersangka atau orang</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-70</span>
    <span class="text-white text-right">Fire in Progress / Kebakaran berlangsung</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-71</span>
    <span class="text-white text-right">Gang War / Shootout / Perang geng atau baku tembak</span>
  </div>

  <!-- RADIO RESPONSE & BACKUP -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-74</span>
    <span class="text-white text-right">Negative / Tidak, ditolak, atau tidak benar</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-76</span>
    <span class="text-white text-right">En Route / Dalam perjalanan menuju lokasi</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-77</span>
    <span class="text-white text-right">Need Assistance / Meminta bantuan rutin</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-78</span>
    <span class="text-white text-right">Emergency Backup / Meminta bantuan darurat segera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-80</span>
    <span class="text-white text-right">Officer in Danger / Polisi dalam bahaya dan tidak dapat merespons</span>
  </div>

  <!-- SPECIAL INCIDENTS -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-89</span>
    <span class="text-white text-right">Bomb Threat / Ancaman bom</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-90</span>
    <span class="text-white text-right">Bank/Jewel Robbery / Perampokan bank atau toko perhiasan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-94</span>
    <span class="text-white text-right">Drag Racing / Balapan liar</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-95</span>
    <span class="text-white text-right">Suspect in Custody / Tersangka telah diamankan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-97</span>
    <span class="text-white text-right">Unauthorized Access / Akses atau penyusupan tanpa izin</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-98</span>
    <span class="text-white text-right">Jailbreak / Pelarian dari penjara</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-99</span>
    <span class="text-white text-right">Situation Concluded / Situasi selesai dan dinyatakan aman</span>
  </div>

</div>

            `
          },
          {
            id: "response",
            title: "Response Codes",
            subtitle: "Tingkat urgensi respon patroli menuju lokasi kejadian.",
            icon: "◎",
            content: `
              <div class="space-y-4">
                <div class="glass-card p-5 rounded-xl border-l-4 border-l-slate-400">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-slate-200 font-mono text-sm">CODE 1</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-slate-500/20 text-slate-300">Low Priority</span>
                  </div>
                  <p class="text-xs text-slate-300">Respon rutin tanpa sirine dan tanpa lampu hazard. Mematuhi seluruh rambu dan peraturan lalu lintas.</p>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-amber-500">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-amber-400 font-mono text-sm">CODE 2</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Medium Priority</span>
                  </div>
                  <p class="text-xs text-slate-300">Respon cepat. Lampu hazard dinyalakan (Emergency Lights ON), **TANPA SIRINE**. Boleh menerobos lampu merah jika aman.</p>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-red-500">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-red-400 font-mono text-sm">CODE 3</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300">HIGH EMERGENCY</span>
                  </div>
                  <p class="text-xs text-slate-300">Respon darurat tertinggi. **LAMPU HAZARD & SIRINE NYALA MAKSIMAL**. Diizinkan melanggar rambu lalu lintas dengan utamakan keselamatan warga.</p>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-emerald-500">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-emerald-400 font-mono text-sm">CODE 4</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Clear / Under Control</span>
                  </div>
                  <p class="text-xs text-slate-300">Situasi di TKP telah aman terkendali. Unit backup yang sedang menuju lokasi diizinkan membatalkan respon / kembali patroli rutin.</p>
                </div>
              </div>
            `
          },
          {
            id: "priority",
            title: "Priority & Threat Level",
            subtitle: "Tingkat ancaman keamanan kota dan protokol pertahanan.",
            icon: "△",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-emerald-500 space-y-2">
                  <div class="font-mono font-bold text-emerald-400 text-sm">GREEN - LOW THREAT</div>
                  <p class="text-xs text-slate-300">Kondisi kota kondusif. Patroli rutin biasa berjalan normal. Cadet diizinkan patroli dengan pendampingan Standard Officer.</p>
                </div>
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-amber-500 space-y-2">
                  <div class="font-mono font-bold text-amber-400 text-sm">AMBER - ELEVATED</div>
                  <p class="text-xs text-slate-300">Peningkatan kriminalitas sedang/perampokan bank aktif. Officer diimbau membawa vest anti-peluru dan senjata jarak menengah.</p>
                </div>
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-red-600 space-y-2">
                  <div class="font-mono font-bold text-red-500 text-sm">RED - HIGH THREAT / LOCKDOWN</div>
                  <p class="text-xs text-slate-300">Ancaman terorisme/penembakan beruntun/geng perang terbuka. Seluruh unit wajib bergabung dalam patroli Adam (min 2 orang per car) & SWAT siaga penuh.</p>
                </div>
              </div>
            `
          },
          {
            id: "radio",
            title: "Radio Abbreviations",
            subtitle: "Singkatan frase populer yang dipakai dalam komunikasi radio.",
            icon: "≡",
            content: `
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">ETA:</b> Estimated Time of Arrival</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GOA:</b> Gone On Arrival</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">RO:</b> Reporting Officer</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">POV:</b> Privately Owned Vehicle</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GSR:</b> Gunshot Residue</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">SO:</b> Suspect / Offender</div>
              </div>
            `
          },
          {
            id: "radio-use",
            title: "Penggunaan Radio",
            subtitle: "Etika dan prosedur transmisi suara di frekuensi utama LSPD.",
            icon: "▣",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4 text-xs text-slate-300 leading-relaxed">
                <h3 class="font-bold text-white text-sm">Aturan Emas Transmisi Radio:</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li><b>Clear & Concise:</b> Sampaikan pesan dengan singkat, padat, dan jelas. Jangan gunakan radio untuk mengobrol santai (chitchat).</li>
                  <li><b>Break Protocol:</b> Jika menyebutkan info panjang, gunakan kata <i>"Break"</i> per 5 detik agar saluran radio tidak terkunci penuh.</li>
                  <li><b>Emergency Silence:</b> Jika ada panggilan <b>10-13 / Code 3</b>, saluran radio terkunci khusus untuk unit pelapor dan supervisor hingga status aman.</li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        category: "PROSEDUR",
        pages: [
          {
            id: "arrest",
            title: "Prosedur Penangkapan",
            subtitle: "Langkah baku pengamanan tersangka di lapangan (Arrest Protocol).",
            icon: "ⓘ",
            content: `
              <div class="space-y-4 text-xs">
                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">1</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pemberhentian & Penjinakan Threat</h4>
                    <p class="text-slate-300">Perintahkan tersangka untuk tiarap / angkat tangan (Verbal Command). Jika melawan, gunakan Taser / Less-Lethal force terlebih dahulu.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">2</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pengendalian & Pengborgolan (Cuffing)</h4>
                    <p class="text-slate-300">Pasang borgol dari belakang posisi tersangka. Pastikan posisi aman dari kemungkinan tersangka menarik senjata tersembunyi.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">3</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Penggeledahan Badan (Pat Down / Search)</h4>
                    <p class="text-slate-300">Geledah saku, pakaian, dan tas tersangka. Amankan barang bukti kejahatan dan senjata berbahaya. Catat barang yang disita.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">4</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pembacaan Hak Miranda (Miranda Rights)</h4>
                    <p class="text-slate-300">Wajib membacakan Hak Miranda setelah tersangka diborgol dan sebelum pemeriksaan resmi diajukan.</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "suspect",
            title: "Memproses Suspect",
            subtitle: "Prosedur booking tersangka di Station Mission Row.",
            icon: "②",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Alur Pemrosesan di Kantor Polisi:</h3>
                <ol class="list-decimal pl-5 space-y-2">
                  <li>Bawa tersangka ke ruang interogasi / area Cell Mission Row PD.</li>
                  <li>Uji tes GSR (Gunshot Residue) atau tes alkohol jika terkait kasus penembakan / berkendara mabuk.</li>
                  <li>Masukkan data pelanggaran ke dalam MDT (MDT Record Creation).</li>
                  <li>Hitung akumulasi pasal hukuman penjara dan denda denda sesuai <b>Penal Code</b>.</li>
                  <li>Pindahkan tersangka ke dalam tahanan utama atau koordinasikan pemindahan ke Bolingbroke Penitentiary jika masa hukuman berat.</li>
                </ol>
              </div>
            `
          },
          {
            id: "mdt",
            title: "Penggunaan MDT",
            subtitle: "Panduan pengoperasian Mobile Data Terminal kepolisian.",
            icon: "▤",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Fungsi Utama MDT:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Citizen Search:</b> Memeriksa lisensi mengemudi, lisensi Senjata, riwayat kriminalitas pasif, dan status buronan (Warrant).
                  </div>
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Vehicle Database:</b> Pengecekan plat nomor kendaraan, pemilik sah, dan laporan pencurian (Stolen Vehicle).
                  </div>
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Create Incident Report:</b> Dokumentasi laporan perkara TKP, nama officer bertugas, serta daftar barang bukti.
                  </div>
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Issue Warrant:</b> Mengajukan surat perintah penangkapan buronan atas persetujuan Detective / High Command.
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "impound",
            title: "Impound Kendaraan",
            subtitle: "Aturan penyitaan kendaraan ilegal atau tidak layak jalan.",
            icon: "♧",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Kriteria Kendaraan Wajib Impound:</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Kendaraan yang ditinggalkan di tengah jalan umum dan mengganggu lalu lintas.</li>
                  <li>Kendaraan hasil kejahatan/perampokan (Crime Scene Evidence).</li>
                  <li>Kendaraan yang dikemudikan tanpa lisensi/STNK yang valid.</li>
                  <li>Kendaraan yang terlibat dalam aksi 10-80 (Pursuit) dan pengemudi berhasil melarikan diri.</li>
                </ul>
              </div>
            `
          },
          {
            id: "miranda",
            title: "BLS & Miranda Rights",
            subtitle: "Pertolongan pertama dan pembacaan hak konstitusi tersangka.",
            icon: "✚",
            content: `
              <div class="space-y-4">
                <div class="glass-card p-5 rounded-xl border-l-4 border-l-amber-500">
                  <h3 class="font-bold text-amber-400 text-sm mb-2 font-mono">TEKS RESMI MIRANDA RIGHTS</h3>
                  <blockquote class="italic text-slate-200 text-xs leading-relaxed bg-dark-900/60 p-4 rounded-lg border border-slate-800">
                    "Anda memiliki hak untuk diam. Apa pun yang Anda katakan dapat dan akan digunakan melawan Anda di pengadilan hukum. Anda berhak atas kehadiran seorang pengacara selama pemeriksaan. Jika Anda tidak mampu menyewa pengacara, seorang pengacara akan ditunjuk untuk Anda oleh negara. Apakah Anda memahami hak-hak ini saat saya membacakannya kepada Anda?"
                  </blockquote>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-red-500">
                  <h3 class="font-bold text-red-400 text-sm mb-2">BLS (Basic Life Support) Prosedur</h3>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    Jika suspek atau warga sipil mengalami pendarahan/tidak sadarkan diri di TKP, lakukan BLS segera (Balut tekan luka, posisikan pemulihan, CPR jika napas terhenti) sambil memanggil unit EMS / Paramedis. Keselamatan jiwa selalu menjadi prioritas di atas pemeriksaan dokumen.
                  </p>
                </div>
              </div>
            `
          },
          {
            id: "conduct",
            title: "Peraturan Internal",
            subtitle: "Kode etik dan standar perilaku anggota kepolisian LSPD.",
            icon: "⌁",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Larangan Keras (Zero Tolerance):</h3>
                <ul class="list-disc pl-5 space-y-2 text-red-300">
                  <li>Dilarang keras menyalahgunakan kewenangan atau menerima suap (Korupsi).</li>
                  <li>Dilarang menggunakan fasilitas/senjata dinas di luar jam tugas resmi.</li>
                  <li>Dilarang membocorkan rahasia data MDT / identitas perwira undercover kepada pihak sipil/kriminal.</li>
                  <li>Dilarang bersikap tidak sopan atau kasar secara berlebihan tanpa alasan RP yang valid.</li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        category: "HUKUM & PERLENGKAPAN",
        pages: [
          {
            id: "penal",
            title: "Penal Code",
            subtitle: "Daftar ringkas pasal kitab undang-undang pidana kota.",
            icon: "§",
            content: `
 <!-- LSPD TMRP Penal Code Table -->
<div class="glass-card p-5 rounded-xl space-y-4">
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse">
      <thead>
        <tr class="border-b border-slate-800 text-slate-400 font-mono">
          <th class="p-2">Kode Pasal</th>
          <th class="p-2">Nama Pelanggaran / Kejahatan</th>
          <th class="p-2">Denda ($)</th>
          <th class="p-2">Hukuman Penjara</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-800/60 font-mono">

        <!-- CATEGORY 0: STATE / NATIONAL SECURITY -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-purple-400">
            State / National Security
          </td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Treason</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Memerangi negara atau membantu musuh negara.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sedition</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Menghasut atau berpartisipasi meruntuhkan otoritas negara.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Rebellion &amp; Insurrection</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Pemberontakan bersenjata untuk merebut fasilitas atau kekuasaan.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sabotage of State Functions</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Merusak atau menghambat infrastruktur maupun sistem darurat negara.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Unlawful Impersonation of State Authority</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Mengaku sebagai pejabat, hakim, atau aparat negara secara ilegal.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Espionage</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Mengirimkan informasi keamanan negara kepada pihak musuh.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Terrorism</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Aksi membahayakan nyawa atau publik untuk mengintimidasi pemerintah.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Domestic Terrorism</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Aksi terorisme yang terjadi dalam skala dan wilayah domestik.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)09</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Complicity of State Enemies</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Memberikan dukungan material atau bantuan kepada musuh negara.
            </div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$350,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>

         <!-- CATEGORY 1: CRIMES AGAINST PERSONS -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-red-400">Crimes Against Persons</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Criminal Threats</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengancam kekerasan hingga menimbulkan rasa takut.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Assault</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengancam atau mencoba melakukan kekerasan fisik tanpa kontak.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">12 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Assault on a Government Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penyerangan tanpa kontak terhadap pegawai pemerintah yang bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$35,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Assault with Deadly Weapon</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penyerangan menggunakan senjata mematikan (senpi/senjam).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$28,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">22 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Assault on Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penyerangan memakai senjata mematikan pada petugas pemerintah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$43,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Domestic Violence</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kekerasan terhadap pasangan, anggota keluarga, atau teman serumah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$32,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Battery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak fisik ilegal yang menyebabkan cedera ringan/sentuhan ofensif.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$35,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">16 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Battery on a Government Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak fisik sengaja/penganiayaan pada pegawai pemerintah yang bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$65,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)09</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Battery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penganiayaan yang menyebabkan cedera berat atau menggunakan senjata.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$50,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)10</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Gang Related Shooting</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penembakan ke orang/kendaraan terkait aktivitas geng.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$30,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)11</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Attempted Second Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Percobaan pembunuhan tanpa perencanaan terlebih dahulu.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$59,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">45 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)12</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Attempted First Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Percobaan pembunuhan yang direncanakan matang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$85,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>
                <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)13</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Attempted Murder of Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Percobaan pembunuhan terhadap pegawai pemerintah saat bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$160,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">80 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)14</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Third Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan tak sengaja akibat tindakan ceroboh atau berbahaya.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$180,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">150 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)15</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Second Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan sengaja tanpa perencanaan sebelumnya.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$200,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">470 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)16</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">First Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan berencana dengan niat jahat.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)17</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Murder of a Government Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan terhadap pegawai pemerintah yang sedang bertugas.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)18</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Serial Homicide</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan berantai terhadap dua orang atau lebih.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)19</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Mayhem</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melukai, memutilasi, atau merusak anggota tubuh seseorang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$60,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">85 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)20</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Mayhem</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melakukan mayhem dengan niat membuat cacat permanen.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)21</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Torture</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengakibatkan rasa sakit atau penderitaan ekstrem untuk menyiksa.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
                <!-- CRIMES AGAINST PERSONS: CONTINUED -->
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)22</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Unlawful Imprisonment</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengurung atau membatasi kebebasan seseorang tanpa wewenang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$3,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)23</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Unlawful Detention</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menahan seseorang dengan ancaman atau paksaan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)24</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostages</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera 1 atau 2 orang untuk menuntut sesuatu atau melarikan diri.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)25</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Hostages</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera 3 orang atau lebih.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)26</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostage Taking of Gov Employee (Cat 1)</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera pejabat tinggi negara (Kategori 1).</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)27</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostage Taking of Gov Employee (Cat 2)</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera pejabat eksekutif (Kategori 2).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$320,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">100 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)28</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostage Taking of Gov Employee (Cat 3)</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera petugas operasional pemerintah (Kategori 3).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$100,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">80 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)29</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Hostage Taking of Gov Employees</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera 4 atau lebih pegawai pemerintah atau dalam kondisi terancam nyawa.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)30</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Kidnapping</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menculik atau membawa lari seseorang tanpa persetujuan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">14 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)31</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Kidnapping of a Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menculik pegawai pemerintah saat bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$45,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)32</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Battery of a Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak kasar yang menyebabkan luka parah atau melibatkan senjata pada pegawai pemerintah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$90,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">45 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)33</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Hostage Taking - Medical Endangerment</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera sambil menghalangi pertolongan medis dalam kondisi krisis.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$120,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">90 Bulan</td>
        </tr>

        <!-- CATEGORY 2: SEXUAL OFFENSES & CHILD PROTECTION -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-pink-400">Sexual Offenses &amp; Child Protection</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Stalking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menguntit atau mengganggu orang lain secara berulang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$2,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Harassment</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melakukan intimidasi atau tindakan mengganggu secara berulang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sexual Assault</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak seksual tanpa persetujuan melalui ancaman atau paksaan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$30,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sexual Battery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menggunakan kekerasan untuk melakukan kontak seksual.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$50,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Indecent Exposure</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mempertontonkan alat kelamin di tempat umum.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$2,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Lewd or Dissolute Conduct</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Berperilaku tidak senonoh atau cabul di depan umum.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$8,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Prostitution</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menawarkan atau melakukan jasa seksual untuk imbalan uang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$60,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">65 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Pandering/Pimping</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menjadi mucikari atau mengontrol keuntungan prostitusi orang lain.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict</td>
        </tr>
                <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)09</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Rape</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Hubungan seksual paksa tanpa persetujuan/kekerasan.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)10</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Statutory Rape</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Hubungan seksual dengan anak di bawah umur.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)11</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Human Trafficking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Perdagangan manusia untuk eksploitasi kerja/seksual.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)12</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Forced Coercion</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memaksa kerja/tindakan seksual lewat ancaman atau wewenang.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)13</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Minor Alcohol / Tobacco Violation</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Anak di bawah umur mengonsumsi/memegang alkohol atau rokok.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)14</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Minor Pornography Violation</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Anak di bawah umur memiliki/membuat konten pornografi.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)15</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sale of Pornography to a Minor</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menjual/menyebarkan konten pornografi kepada anak di bawah umur.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)16</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sale of Alcohol/Tobacco to a Minor</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menjual alkohol/rokok kepada anak di bawah umur.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$7,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">12 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)17</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Child Neglect</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Orang tua/wali menelantarkan kesehatan dan keselamatan anak.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)18</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Child Abuse</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melakukan kekerasan fisik atau penganiayaan pada anak.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)19</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Desecration of a Human Corpse</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak atau memperlakukan mayat manusia secara tidak layak.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)20</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Illegal Possession of Human Remains</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memiliki atau menyembunyikan jasad/sisa jasad manusia secara ilegal.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)21</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Illegal Exhumation</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Membongkar makam atau mengambil mayat tanpa izin.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <!-- CATEGORY 3: PROPERTY CRIMES -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-amber-400">Property Crimes</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Leaving Without Paying</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pergi tanpa membayar tagihan barang/jasa.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$300</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Petty Theft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri barang dengan nilai di bawah $1,000.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">7 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Theft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri barang dengan nilai di atas $1,000.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Joyriding</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengendarai kendaraan orang lain tanpa izin, bukan untuk memilikinya.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$2,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">7 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Theft Auto</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pencurian kendaraan bermotor untuk dimiliki permanen.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">12 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Theft of Firearm</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri senjata api milik orang lain.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$25,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Tampering with Vehicle</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengotak-atik atau membobol kendaraan tanpa izin.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$3,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
                <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Commercial Robbery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merampok tempat komersial/toko ritel dengan ancaman.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$7,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)10</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Possession of Stolen Goods</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memegang atau menyimpan barang hasil curian.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$3,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)11</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Possession of Stolen Identification</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memegang kartu identitas (ID) resmi hasil curian.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$7,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)12</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Larceny Federal Reserve Banks</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembobolan/perampokan bank skala besar (Pacific Standard, dll).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)13</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Larceny Public Reserve Banks</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembobolan/perampokan bank cabang lokal (Fleeca Bank).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$10,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)14</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Larceny Major Property Crime</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Perampokan properti besar (Gruppe Six, Bobcat, Cargo, dll).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$10,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)15</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Theft of an Aircraft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengambil atau menguasai pesawat tanpa izin.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$8,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)16</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Theft of a Commercial Aircraft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengambil atau mengoperasikan pesawat komersial tanpa izin.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$9,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">40 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)17</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Burglary</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Masuk ke bangunan orang lain untuk melakukan kejahatan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$8,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)18</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Trespassing</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Masuk/berada di properti pribadi tanpa izin owner.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$1,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)19</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Felony Trespassing</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyusup ke area infrastruktur vital (NOOSE, Pembangkit Listrik, dll).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$90,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">45 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)20</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Trespassing of a Military Facility</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyusup ke pangkalan/fasilitas militer terlarang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$100,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)21</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Arson</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Sengaja membakar properti, lahan, atau bangunan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$350,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)22</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Destruction of Gov Property</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak atau menghancurkan aset milik pemerintah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$156,250</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)23</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Entertainment Property Taking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri uang/aset dari kasino, bioskop, atau tempat hiburan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)24</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Cultural Museum Property Taking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri/merusak artefak dan karya seni dari museum.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)25</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Government Property Taking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menguasai/mencuri kendaraan atau barang milik negara.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,250</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)26</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Robbery of Vangelico Property</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Perampokan toko perhiasan Vangelico.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$12,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)27</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Accessory to Robbery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Membantu pelaku perampokan (driver kabur, pantau situasi).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)28</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">ATM Robbery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Membobol atau mencuri uang dari mesin ATM.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$1,700</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)29</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Vandalism</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak fasilitas/properti publik atau pribadi secara sengaja.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$4,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">8 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)30</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Vandalism on Gov Property</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak properti/fasilitas fisik milik negara.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$9,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)31</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Import/Export Stolen Vehicles</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyelundupkan/menyimpan mobil curian di area pelabuhan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$9,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">40 Bulan</td>
        </tr>
        <tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-orange-400">
    Fraud, Justice &amp; Government Integrity
  </td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)01</td>
  <td class="p-2"><span class="font-semibold">Forgery</span><p class="text-xs text-slate-400">Pemalsuan dokumen untuk tujuan penipuan.</p></td>
  <td class="p-2 text-emerald-400">$6,500</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)02</td>
  <td class="p-2"><span class="font-semibold">State Document Forgery</span><p class="text-xs text-slate-400">Memalsukan lisensi, ID, atau dokumen resmi pemerintah.</p></td>
  <td class="p-2 text-emerald-400">$15,250</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)03</td>
  <td class="p-2"><span class="font-semibold">Vehicle Registration Fraud</span><p class="text-xs text-slate-400">Memalsukan plat nomor, STNK, atau surat kendaraan.</p></td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)04</td>
  <td class="p-2"><span class="font-semibold">Fraud</span><p class="text-xs text-slate-400">Menipu orang lain demi keuntungan finansial.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)05</td>
  <td class="p-2"><span class="font-semibold">Voter Fraud</span><p class="text-xs text-slate-400">Memanipulasi proses pemilu atau menggunakan identitas palsu.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)06</td>
  <td class="p-2"><span class="font-semibold">Racketeering</span><p class="text-xs text-slate-400">Menjalankan bisnis ilegal terorganisir demi keuntungan.</p></td>
  <td class="p-2 text-emerald-400">$13,000</td>
  <td class="p-2">60 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)07</td>
  <td class="p-2"><span class="font-semibold">Extortion</span><p class="text-xs text-slate-400">Memeras harta atau uang orang lain dengan ancaman.</p></td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">40 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)08</td>
  <td class="p-2"><span class="font-semibold">Money Laundering</span><p class="text-xs text-slate-400">Menyembunyikan asal-usul uang hasil kejahatan.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)09</td>
  <td class="p-2"><span class="font-semibold">1st Degree Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang hasil kejahatan bernilai di atas $460,000.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)10</td>
  <td class="p-2"><span class="font-semibold">Impersonation</span><p class="text-xs text-slate-400">Menyamar menjadi orang lain untuk mengelabui orang.</p></td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)11</td>
  <td class="p-2"><span class="font-semibold">Identity Theft</span><p class="text-xs text-slate-400">Mencuri data pribadi orang lain untuk kejahatan.</p></td>
  <td class="p-2 text-emerald-400">$6,000</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)12</td>
  <td class="p-2"><span class="font-semibold">Impersonating a Gov Employee</span><p class="text-xs text-slate-400">Mengaku sebagai pegawai pemerintah untuk menipu.</p></td>
  <td class="p-2 text-emerald-400">$50,000</td>
  <td class="p-2">35 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)13</td>
  <td class="p-2"><span class="font-semibold">Embezzlement</span><p class="text-xs text-slate-400">Menyalahgunakan atau menggelapkan uang instansi tempat bekerja.</p></td>
  <td class="p-2 text-emerald-400">$10,500</td>
  <td class="p-2">30 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)14</td>
  <td class="p-2"><span class="font-semibold">Conspiracy</span><p class="text-xs text-slate-400">Bersekongkol dengan orang lain untuk merencanakan kejahatan.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)15</td>
  <td class="p-2"><span class="font-semibold">Bribery</span><p class="text-xs text-slate-400">Memberi atau menerima suap untuk memengaruhi keputusan pejabat.</p></td>
  <td class="p-2 text-emerald-400">$100,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)16</td>
  <td class="p-2"><span class="font-semibold">Perjury</span><p class="text-xs text-slate-400">Memberikan keterangan atau sumpah palsu di persidangan resmi.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)17A</td>
  <td class="p-2"><span class="font-semibold">Evidence Tampering</span><p class="text-xs text-slate-400">Merusak, mengubah, atau menyembunyikan barang bukti.</p></td>
  <td class="p-2 text-emerald-400">$30,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)17B</td>
  <td class="p-2"><span class="font-semibold">Evidence Tampering (Aggravated)</span><p class="text-xs text-slate-400">Penghancuran barang bukti secara masif pada sidang besar.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)18</td>
  <td class="p-2"><span class="font-semibold">Witness Tampering</span><p class="text-xs text-slate-400">Mengancam atau menyuap saksi agar tidak bersaksi.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)19</td>
  <td class="p-2"><span class="font-semibold">Intimidating Witness or Victim</span><p class="text-xs text-slate-400">Mengintimidasi saksi atau korban agar menarik laporan.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)20</td>
  <td class="p-2"><span class="font-semibold">Obstruction of Public Duty</span><p class="text-xs text-slate-400">Menghalangi pegawai pemerintah yang sedang bertugas.</p></td>
  <td class="p-2 text-emerald-400">$12,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)21</td>
  <td class="p-2"><span class="font-semibold">Obstruction of Justice</span><p class="text-xs text-slate-400">Menghambat penyidikan polisi atau proses peradilan.</p></td>
  <td class="p-2 text-emerald-400">$50,000</td>
  <td class="p-2">70 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)22</td>
  <td class="p-2"><span class="font-semibold">Misuse of Emergency Hotline</span><p class="text-xs text-slate-400">Menyalahgunakan nomor panggilan darurat (911).</p></td>
  <td class="p-2 text-emerald-400">$500</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)23</td>
  <td class="p-2"><span class="font-semibold">False Report of Emergency</span><p class="text-xs text-slate-400">Membuat laporan palsu pemicu respons darurat (swatting).</p></td>
  <td class="p-2 text-emerald-400">$800</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)24</td>
  <td class="p-2"><span class="font-semibold">Failure to Pay a Fine</span><p class="text-xs text-slate-400">Sengaja menolak membayar denda hukum yang ditetapkan.</p></td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)25</td>
  <td class="p-2"><span class="font-semibold">Failure to ID to Peace Officer</span><p class="text-xs text-slate-400">Menolak menunjukkan ID resmi saat ditahan secara sah.</p></td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)26</td>
  <td class="p-2"><span class="font-semibold">Misdemeanor Tax Evasion</span><p class="text-xs text-slate-400">Menghindari pajak skala ringan atau di bawah batas felony.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)27</td>
  <td class="p-2"><span class="font-semibold">Felony Tax Evasion</span><p class="text-xs text-slate-400">Menghindari pembayaran pajak skala berat.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)28</td>
  <td class="p-2"><span class="font-semibold">Gambling License Violation</span><p class="text-xs text-slate-400">Mengoperasikan tempat perjudian tanpa lisensi resmi.</p></td>
  <td class="p-2 text-slate-400">- (Tidak tercantum)</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)29</td>
  <td class="p-2"><span class="font-semibold">Criminal Business Operations</span><p class="text-xs text-slate-400">Membuka bisnis kedok untuk kejahatan terorganisir.</p></td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">150 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)30</td>
  <td class="p-2"><span class="font-semibold">Legal Practice Violation</span><p class="text-xs text-slate-400">Praktik pengacara tanpa izin atau lisensi resmi dari negara.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)31</td>
  <td class="p-2"><span class="font-semibold">Medical Practice Violation</span><p class="text-xs text-slate-400">Praktik dokter atau medis tanpa sertifikasi atau lisensi resmi.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)32</td>
  <td class="p-2"><span class="font-semibold">2nd Degree Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang ilegal senilai $150,000 - $459,999.</p></td>
  <td class="p-2 text-emerald-400">$60,000</td>
  <td class="p-2">70 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)33</td>
  <td class="p-2"><span class="font-semibold">3rd Degree Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang ilegal senilai $50,000 - $149,999.</p></td>
  <td class="p-2 text-emerald-400">$35,000</td>
  <td class="p-2">50 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)34</td>
  <td class="p-2"><span class="font-semibold">Unlawful Poss. State Insignia</span><p class="text-xs text-slate-400">Memiliki seragam atau lencana resmi tanpa wewenang.</p></td>
  <td class="p-2 text-emerald-400">$32,000</td>
  <td class="p-2">12 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)35</td>
  <td class="p-2"><span class="font-semibold">Minor Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang ilegal senilai di bawah $50,000.</p></td>
  <td class="p-2 text-emerald-400">$15,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)36</td>
  <td class="p-2"><span class="font-semibold">3rd Degree Poss. Illegal Cards/Hacking</span><p class="text-xs text-slate-400">Memiliki 1-10 laundry card atau alat hacking ilegal.</p></td>
  <td class="p-2 text-emerald-400">$30,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)37</td>
  <td class="p-2"><span class="font-semibold">2nd Degree Poss. Illegal Cards/Hacking</span><p class="text-xs text-slate-400">Memiliki 11-39 laundry card atau alat hacking ilegal.</p></td>
  <td class="p-2 text-emerald-400">$60,000</td>
  <td class="p-2">36 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)38</td>
  <td class="p-2"><span class="font-semibold">1st Degree Poss. Illegal Cards/Hacking</span><p class="text-xs text-slate-400">Memiliki >= 40 laundry card atau alat hacking ilegal.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-sky-400">
    Public Order &amp; Court Compliance
  </td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)01</td>
  <td class="p-2">
    <span class="font-semibold">Loitering</span>
    <p class="text-xs text-slate-400">Nongkrong tanpa tujuan jelas di area publik setelah ditegur.</p>
  </td>
  <td class="p-2 text-emerald-400">$50</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)02</td>
  <td class="p-2">
    <span class="font-semibold">Unlawful Assembly</span>
    <p class="text-xs text-slate-400">Berkumpul (3+ orang) dengan niat membuat rusuh/ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)03</td>
  <td class="p-2">
    <span class="font-semibold">Incitement to Riot</span>
    <p class="text-xs text-slate-400">Menghasut/mendorong kerusuhan publik yang anarkis.</p>
  </td>
  <td class="p-2 text-emerald-400">$17,000</td>
  <td class="p-2">30 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)04</td>
  <td class="p-2">
    <span class="font-semibold">Obstruction of Gov Employee</span>
    <p class="text-xs text-slate-400">Menghalangi/menunda tugas pegawai pemerintah.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)05</td>
  <td class="p-2">
    <span class="font-semibold">Disobeying a Peace Officer</span>
    <p class="text-xs text-slate-400">Menolak perintah sah dari aparat penegak hukum.</p>
  </td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)06</td>
  <td class="p-2">
    <span class="font-semibold">Evading a Peace Officer</span>
    <p class="text-xs text-slate-400">Melarikan diri dari kejaran polisi (jalan kaki/kendaraan).</p>
  </td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">6 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)07</td>
  <td class="p-2">
    <span class="font-semibold">Resisting Arrest</span>
    <p class="text-xs text-slate-400">Melawan, menghambat, atau menolak penangkapan fisik secara sah.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)08</td>
  <td class="p-2">
    <span class="font-semibold">Escaping Custody</span>
    <p class="text-xs text-slate-400">Kabur dari penahanan, ruang interogasi, atau penjara.</p>
  </td>
  <td class="p-2 text-emerald-400">$3,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)09</td>
  <td class="p-2">
    <span class="font-semibold">Disturbing the Peace</span>
    <p class="text-xs text-slate-400">Mengganggu ketenangan publik dengan keonaran/perkelahian.</p>
  </td>
  <td class="p-2 text-emerald-400">$8,000</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)10</td>
  <td class="p-2">
    <span class="font-semibold">Failure to Appear</span>
    <p class="text-xs text-slate-400">Mangkir dari panggilan persidangan pengadilan/jaminan.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)11</td>
  <td class="p-2">
    <span class="font-semibold">Subpoena Violation</span>
    <p class="text-xs text-slate-400">Mengabaikan atau melanggar surat panggilan resmi pengadilan.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)12</td>
  <td class="p-2">
    <span class="font-semibold">Violating a Court Order</span>
    <p class="text-xs text-slate-400">Melanggar Perintah Pengadilan / Restraining Order.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)13</td>
  <td class="p-2">
    <span class="font-semibold">Contempt of Court</span>
    <p class="text-xs text-slate-400">Bersikap tidak sopan/mengganggu proses di dalam ruang sidang.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)14</td>
  <td class="p-2">
    <span class="font-semibold">Neglect of Public Duty</span>
    <p class="text-xs text-slate-400">Pejabat publik yang menolak menjalankan tugas wajibnya.</p>
  </td>
  <td class="p-2 text-emerald-400">$7,500</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)15</td>
  <td class="p-2">
    <span class="font-semibold">Corruption of Public Office</span>
    <p class="text-xs text-slate-400">Menyalahgunakan jabatan demi keuntungan pribadi.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict / Death Sentence</td>
</tr>
            `
          },
          {
            id: "weapons",
            title: "Peralatan Kepolisian",
            subtitle: "Standard Issue Equipment untuk seluruh petugas patroli.",
            icon: "▤",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-blue-500">
                  <h4 class="font-bold text-white mb-1">Combat Pistol / Service Weapon</h4>
                  <p class="text-slate-300">Senjata api standar. Penggunaan harus sesuai Prosedur Use of Force (Lethal Force hanya jika ada ancaman mematikan).</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-amber-500">
                  <h4 class="font-bold text-white mb-1">Stun Gun / Taser X2</h4>
                  <p class="text-slate-300">Senjata melumpuhkan jarak dekat non-lethal untuk suspek yang agresif secara fisik namun tidak bersenjata api.</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-slate-400">
                  <h4 class="font-bold text-white mb-1">Nightstick / Baton</h4>
                  <p class="text-slate-300">Tongkat pemukul untuk mengendalikan kerusuhan massa / pertahanan diri jarak dekat.</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-emerald-500">
                  <h4 class="font-bold text-white mb-1">Spike Strips & Radar Gun</h4>
                  <p class="text-slate-300">Peralatan taktis jalan raya untuk menghentikan Pengejaran Kendaraan & pengukur kecepatan lalu lintas.</p>
                </div>
              </div>
            `
          },
          {
            id: "pursuit",
            title: "Vehicle Pursuit",
            subtitle: "SOP dan manuver taktis dalam kejar-kejaran kendaraan (10-80).",
            icon: "➤",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Taktik Pengejaran Terotorisasi:</h3>
                <div class="space-y-3">
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">Primary Unit:</b> Mobil patroli terdepan yang memimpin pursuit. Fokus mengemudi dan melaporkan pergerakan jalan.
                  </div>
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">Secondary Unit:</b> Mobil patroli kedua di belakang primary. Mengambil alih komunikasi radio penuh agar Primary fokus mengemudi.
                  </div>
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">PIT Maneuver (Precision Immobilization Technique):</b> Diizinkan hanya oleh Sergeant+ pada kecepatan di bawah 50 MPH dan di area aman dari pejalan kaki.
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "training",
            title: "Training & Recruitment",
            subtitle: "Jalur karir, pelatihan akademi, dan ujian sertifikasi.",
            icon: "✦",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Tahapan Rekrutmen LSPD:</h3>
                <ol class="list-decimal pl-5 space-y-2">
                  <li><b>Pendaftaran Berkas & Form Aplikasi Web</b></li>
                  <li><b>Ujian Wawancara Psikologi & Pengetahuan SOP</b></li>
                  <li><b>Pelatihan Akademi LSPD (Physical & Radio Test)</b></li>
                  <li><b>Masa Percobaan Cadet (Probationary Field Duty)</b></li>
                  <li><b>Kelulusan Menjadi Officer I Full-Pledge</b></li>
                </ol>
              </div>
            `
          }
        ]
      }
    ];

    let currentPageId = "chain";

    // Flatten pages list untuk mencari index/nomor modul secara urut
    const ALL_PAGES = HANDBOOK_DATA.flatMap(cat => cat.pages);

    // INITIALIZE APP
    window.onload = function() {
      renderNavigation();
      loadPage(currentPageId);

      // Keyboard Shortcut for Search
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          document.getElementById('searchInput').focus();
        }
      });
    };

    // RENDER SIDEBAR NAVIGATION
    function renderNavigation(filter = "") {
      const navContainer = document.getElementById('navContainer');
      navContainer.innerHTML = "";

      HANDBOOK_DATA.forEach(cat => {
        // Filter pages based on search text
        const filteredPages = cat.pages.filter(p => 
          p.title.toLowerCase().includes(filter.toLowerCase()) || 
          p.subtitle.toLowerCase().includes(filter.toLowerCase()) ||
          p.content.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredPages.length > 0) {
          const categoryHeader = document.createElement('div');
          categoryHeader.className = "text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4 px-2 font-mono";
          categoryHeader.innerText = cat.category;
          navContainer.appendChild(categoryHeader);

          filteredPages.forEach(page => {
            const btn = document.createElement('button');
            const isActive = page.id === currentPageId;
            btn.className = `w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-left group ${
              isActive 
                ? 'bg-police-blue/30 text-white border border-police-accent/40 font-semibold shadow-md' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-dark-700/60'
            }`;
            btn.onclick = () => {
              loadPage(page.id);
              if (window.innerWidth < 768) toggleSidebar();
            };

            btn.innerHTML = `
              <span class="${isActive ? 'text-police-gold' : 'text-slate-500 group-hover:text-slate-300'} font-mono">${page.icon}</span>
              <span class="truncate">${page.title}</span>
            `;
            navContainer.appendChild(btn);
          });
        }
      });

      if (navContainer.children.length === 0) {
        navContainer.innerHTML = `<div class="text-center py-8 text-xs text-slate-500 font-mono">Hasil pencarian tidak ditemukan...</div>`;
      }
    }

    // LOAD SELECTED PAGE CONTENT
    function loadPage(pageId) {
      currentPageId = pageId;
      
      let foundPage = null;
      let foundCategory = "";

      HANDBOOK_DATA.forEach(cat => {
        const p = cat.pages.find(x => x.id === pageId);
        if (p) {
          foundPage = p;
          foundCategory = cat.category;
        }
      });

      if (!foundPage) return;

      // Hitung urutan modul dinamis berdasarkan urutan elemen di ALL_PAGES
      const moduleIndex = ALL_PAGES.findIndex(p => p.id === pageId);
      if (moduleIndex !== -1) {
        document.getElementById('moduleCount').innerText = moduleIndex + 1;
      }

      // Update UI Header & Breadcrumb
      document.getElementById('breadcrumbCategory').innerText = foundCategory;
      document.getElementById('breadcrumbPage').innerText = foundPage.title;
      document.getElementById('pageTitle').innerText = foundPage.title;
      document.getElementById('pageSubtitle').innerText = foundPage.subtitle;

      // Update Active Navigation Item
      renderNavigation(document.getElementById('searchInput').value);

      // Render Content Body
      document.getElementById('pageContent').innerHTML = foundPage.content;
    }

    // SEARCH FILTER HANDLE
    function handleSearch(query) {
      renderNavigation(query);
    }

    // SIDEBAR TOGGLE MOBILE
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobileOverlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }


// THEME TOGGLE (saved locally in this browser)
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  const meta = document.getElementById('themeColorMeta');
  if (icon) icon.textContent = isLight ? '🌙' : '☀️';
  if (label) label.textContent = isLight ? 'Mode Gelap' : 'Mode Cerah';
  if (meta) meta.setAttribute('content', isLight ? '#f4f6fa' : '#0f1115');
  const button = document.getElementById('themeToggle');
  if (button) button.setAttribute('aria-label', isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode cerah');
}
function toggleTheme() {
  const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
  try { localStorage.setItem('lspd-handbook-theme', nextTheme); } catch (e) {}
  applyTheme(nextTheme);
}
(function initTheme() {
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('lspd-handbook-theme') || 'dark'; } catch (e) {}
  applyTheme(savedTheme);
})();



// Welcome screen transition into the handbook
function openHandbook() {
  const welcome = document.getElementById('welcomeScreen');
  if (!welcome || welcome.classList.contains('is-leaving')) return;
  welcome.classList.add('is-leaving');
  document.body.classList.add('handbook-entered');
  window.setTimeout(() => {
    welcome.setAttribute('aria-hidden', 'true');
    welcome.style.display = 'none';
  }, 780);
}
