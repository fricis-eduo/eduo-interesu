import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privātuma politika — EDUO",
  description: "EDUO privātuma politika un personas datu apstrādes noteikumi.",
  robots: { index: false, follow: false },
};

export default function PrivatumaPolitika() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-eduo-blue font-semibold mb-10 hover:text-eduo-pink transition-colors"
        >
          ← Atpakaļ uz sākumlapu
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privātuma politika</h1>
        <p className="text-gray-500 text-sm mb-10">Pēdējo reizi atjaunots: 2026. gada jūnijā</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Pārzinis</h2>
            <p>
              Personas datu pārzinis ir <strong>SIA EDUO</strong> (turpmāk — EDUO),
              e-pasts: <a href="mailto:interesu@eduo.me" className="text-eduo-blue hover:underline">interesu@eduo.me</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Kādi dati tiek vākti</h2>
            <p>Izmantojot mūsu kontakta veidlapu, mēs varam apstrādāt šādus personas datus:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Vārds un uzvārds</li>
              <li>E-pasta adrese</li>
              <li>Tālruņa numurs (neobligāts)</li>
              <li>Bērnudārza nosaukums (neobligāts, vadītājiem)</li>
              <li>Ziņojuma saturs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Nolūks un juridiskais pamats</h2>
            <p>
              Dati tiek apstrādāti, lai atbildētu uz jūsu pieprasījumu un sniegtu informāciju par EDUO pakalpojumiem.
              Juridiskais pamats — datu subjekta piekrišana (VDAR 6. panta 1. punkta a) apakšpunkts).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Datu glabāšana</h2>
            <p>
              Personas dati tiek glabāti tikai tik ilgi, cik nepieciešams pieprasījuma apstrādei,
              bet ne ilgāk kā 2 gadus, ja vien netiek noslēgts līgums par pakalpojumu sniegšanu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Datu nodošana trešajām pusēm</h2>
            <p>
              Jūsu personas dati netiek pārdoti vai nodoti trešajām pusēm komerciāliem nolūkiem.
              Dati tiek nosūtīti pa e-pastu, izmantojot Google Workspace infrastruktūru.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Jūsu tiesības</h2>
            <p>Jums ir tiesības:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Piekļūt saviem personas datiem</li>
              <li>Labot neprecīzus datus</li>
              <li>Dzēst savus datus ("tiesības tikt aizmirstam")</li>
              <li>Iebilst pret datu apstrādi</li>
              <li>Iesniegt sūdzību Datu valsts inspekcijā (dvi.gov.lv)</li>
            </ul>
            <p className="mt-3">
              Lai izmantotu šīs tiesības, rakstiet uz{" "}
              <a href="mailto:interesu@eduo.me" className="text-eduo-blue hover:underline">interesu@eduo.me</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Sīkdatnes</h2>
            <p>
              Šī vietne pašlaik neizmanto izsekošanas vai analītikas sīkdatnes.
              Vietne var izmantot tehniskas sīkdatnes, kas nepieciešamas tās darbībai.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
