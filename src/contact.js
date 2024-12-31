import { createContact, createElement, createSection } from "./utils";

export const contactPage = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contactBack = createElement("div", ["menuSection"]);
  const contact = createElement("h1", ["pageHeader"], "Contact Us");
  contactBack.append(contact);
  content.append(contactBack);

  const freddie = createContact(
    `Freddie "Flycatcher" McHop`,
    `Role: Chief Bug Inspector`,
    `Email: freddie.flycatcher@lilypondmail.com`,
    `Phone: (555)-123-4567`,
    `Address: 1 Croak Lane, Swamptown, USA`,
    `Notes: Always available for bug-related questions and fly-catching techniques.`
  );
  content.append(freddie);

  const lola = createContact(
    `Lola "Legs" Leaper`,
    `Role: Senior Jumping Specialist`,
    `Email: flola.legs@jumpmail.com`,
    `Phone: (555)-987-6543`,
    `Address: 2 Lilly Pad Drive, Frogville, USA`,
    `Notes: Call for tips on improving your jumping skills or if you need a partner for leapfrog!`
  );
  content.append(lola);

  const benny = createContact(
    `Benny "Bubbles" Bogsworth`,
    `Role: Swamp Party Planner`,
    `Email: benny.bubbles@swampmail.com`,
    `Phone: (555)-6177-2493`,
    `Address: 3 Marshy Way, Ribbit City, USA`,
    `Notes: Contact Benny for all your swamp party needs, from lily pad decorations to fly appetizers!
`
  );
  content.append(benny);
};
