
const timetableData = {
    "Academic TT": [
        {
            img: "./Screenshot 2025-05-27 173430.png",
            date: "Summer Classes",
            organizer: "Dean Office",
            time: "Summer",
        },

    ],
    "Class TT": [
        {
            img: "Screenshot 2025-05-27 174018.png",
            date: "Odd Sem",
            organizer: "Class Coordinator",
            time: "09:00 AM",
        },

    ],
    "Events TT": [
        {
            img: "WhatsApp Image 2025-05-25 at 12.00.47_52d7b94e.jpg",
            date: "2025-06-05",
            organizer: "Microsoft",
            time: "05:00 PM",
        },

    ],
};


function generateCards() {
    for (const section in timetableData) {
        const sectionContainer = document.getElementById(`${section.toLowerCase().replace(" ", "-")}`);
        const sectionItems = timetableData[section];

        sectionItems.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
        <img src="${item.img}" alt="Timetable" />
        <div class="details">
          <p><strong>Date:</strong> ${item.date}</p>
          <p><strong>Organizer:</strong> ${item.organizer}</p>
          <p><strong>Time:</strong> ${item.time}</p>
        </div>
        <a href="${item.img}" download="${section.replace(/\s+/g, "_")}_${item.date}.jpg" class="download-btn">
          Download
        </a>
      `;

            sectionContainer.appendChild(card);
        });
    }
}
generateCards();
