// array initialization
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб"
];

giveParcel(); // Кристина
giveParcel(); // Олег
giveParcel(); // Кирилл

// remove all other waiting people
while (peopleWaiting.length > 0)
  leaveQueueWithoutParcel();

/**
 * Give parcel to next person and remove him from queue
 */
function giveParcel() {
  const person = peopleWaiting.shift();
  alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}


/**
 * Remove last person from queue
 */
function leaveQueueWithoutParcel() {
  const person = peopleWaiting.pop();
  alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
}

