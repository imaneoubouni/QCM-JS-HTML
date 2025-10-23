function initialiser() {
  document.forms["qcm"].reset();
}
//corriger
function corriger() {
  let fenetre = window.open("", "corrige", "width=600,height=600,scrollbars=yes");

  // structure de base du HTML
  fenetre.document.write(`
    <html>
      <head>
        <title>Corrigé du QCM</title>
        <style>
          body {
            font-family: oblique;
            background-color: rgb(247, 245, 216);
            color: rgb(60, 40, 40);
            padding: 20px;
          }
          h2 {
            text-align: center;
            color: rgb(116, 79, 79);
          }
          h4 {
            margin-top: 20px;
            color: rgb(95, 59, 59);
          }
          .vrai {
            color: green !important;
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h2>Corrigé du QCM</h2>

        <h4>1. Quel langage est exécuté côté client ?</h4>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li class="vrai">JavaScript</li>
        </ul>

        <h4>2. Que signifie HTML ?</h4>
        <ul>
          <li class="vrai">HyperText Markup Language</li>
          <li>HighText Machine Language</li>
          <li>HyperTransfer Markup Logic</li>
        </ul>

        <h4>3. Quels sont des langages web ?</h4>
        <ul>
          <li class="vrai">HTML</li>
          <li class="vrai">CSS</li>
          <li>Python</li>
        </ul>

        <h4>4. Lesquelles de ces instructions sont valides en JavaScript ?</h4>
        <ul>
          <li class="vrai">let x = 10;</li>
          <li class="vrai">var nom = "Imane";</li>
          <li>int age = 20;</li>
        </ul>

        <h4>5. Quels sont des frameworks JavaScript ?</h4>
        <ul>
          <li class="vrai">React</li>
          <li class="vrai">Angular</li>
          <li>Django</li>
        </ul>
      </body>
    </html>
  `);

  fenetre.document.close();

  // ajuster la hauteur selon le contenu
  fenetre.resizeTo(600, fenetre.document.body.scrollHeight + 50);
}

function afficherResultat() {
  const form = document.forms["qcm"];
  let score = 0;

  // Question 1
  if (form.os1.value === "1-c") score++;
  // Question 2
  if (form.os2.value === "2-a") score++;

  // Question 3 
  let q3 = [];
  for (let i = 0; i < form.os3.length; i++) if (form.os3[i].checked) q3.push(form.os3[i].value);
  if (q3.includes("3-a") && q3.includes("3-b") && q3.length === 2) score++;

  // Question 4 
  let q4 = [];
  for (let i = 0; i < form.os4.length; i++) if (form.os4[i].checked) q4.push(form.os4[i].value);
  if (q4.includes("4-a") && q4.includes("4-b") && q4.length === 2) score++;

  // Question 5 
  let q5 = [];
  for (let i = 0; i < form.os.length; i++) if (form.os[i].checked) q5.push(form.os[i].value);
  if (q5.includes("5-a") && q5.includes("5-b") && q5.length === 2) score++;

  // show score
  let fenetre = window.open("", "resultat", "width=400,height=300,scrollbars=yes");
  fenetre.document.write("<h2>Résultat du QCM</h2>");
  fenetre.document.write("<p>Votre score est : " + score + "/5</p>");
  fenetre.document.close();
}