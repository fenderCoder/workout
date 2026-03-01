const days = [
	{
		id: "mon",
		name: "MON",
		fullName: "Monday",
		subtitle: "Core & Functional Strength",
		type: "Core",
		warmup: [
			{ name: "Arm circles", detail: "30 sec forward/backward" },
			{ name: "Torso twists", detail: "1 min" },
			{ name: "Bodyweight squats", detail: "10 reps" },
			{ name: "Cat-Cow stretch", detail: "1 min" },
		],
		exercises: [
			{ name: "Plank", detail: "3 × 30-60 sec" },
			{ name: "Dead Bug", detail: "3 × 10 reps/side" },
			{ name: "Russian Twists", detail: "3 × 15 reps/side" },
			{ name: "Bird Dog", detail: "3 × 10 reps/side" },
			{ name: "Standing Dumbbell Shoulder Press", detail: "3 × 10 reps" },
			{ name: "Bodyweight Squats", detail: "3 × 15 reps" },
			{ name: "Glute Bridges", detail: "3 × 12 reps" },
			{ name: "Bicycle Crunches", detail: "3 × 15 reps/side" },
		],
		cooldown: [
			{ name: "Seated Forward Fold", detail: "30 sec" },
			{ name: "Cobra Stretch", detail: "30 sec" },
			{ name: "Child's Pose", detail: "1 min" },
			{ name: "Deep breathing", detail: "1 min" },
		],
	},
	{
		id: "tue",
		name: "TUE",
		fullName: "Tuesday",
		subtitle: "Mobility & Flexibility",
		type: "Mobility",
		warmup: [
			{ name: "Neck rolls", detail: "30 sec" },
			{ name: "Shoulder rolls", detail: "30 sec" },
			{ name: "Standing side stretches", detail: "30 sec/side" },
		],
		exercises: [
			{ name: "Cat-Cow Stretch", detail: "1 min" },
			{ name: "Downward Dog", detail: "1 min" },
			{ name: "Pigeon Pose", detail: "1 min/side" },
			{ name: "Seated Forward Fold", detail: "1 min" },
			{ name: "Cobra Stretch", detail: "1 min" },
		],
		cooldown: [
			{ name: "Supine Twist", detail: "1 min/side" },
			{ name: "Knees-to-Chest", detail: "1 min" },
			{ name: "Deep breathing", detail: "2 min" },
		],
		note: "Yoga/Dynamic Stretching Routine — 30-45 min total",
	},
	{
		id: "wed",
		name: "WED",
		fullName: "Wednesday",
		subtitle: "Upper Body & Arm Focus",
		type: "Arms",
		warmup: [
			{ name: "Arm swings", detail: "1 min" },
			{ name: "Shoulder rolls", detail: "1 min" },
			{ name: "Light push-ups", detail: "10 reps" },
			{ name: "Torso twists", detail: "1 min" },
		],
		exercises: [
			{ name: "Pull-Ups (or Assisted)", detail: "3 × 5-8 reps" },
			{ name: "Push-Ups", detail: "3 × 10-15 reps" },
			{ name: "Dumbbell Bicep Curls", detail: "3 × 10 reps" },
			{ name: "Triceps Dips", detail: "3 × 10 reps" },
			{ name: "Dumbbell Rows", detail: "3 × 10 reps/side" },
			{ name: "Lateral Raises", detail: "3 × 10 reps" },
			{ name: "Farmer's Carry", detail: "3 × 30 sec" },
		],
		cooldown: [
			{ name: "Doorway Chest Stretch", detail: "30 sec/side" },
			{ name: "Overhead Triceps Stretch", detail: "30 sec/side" },
			{ name: "Child's Pose", detail: "1 min" },
			{ name: "Deep breathing", detail: "1 min" },
		],
	},
	{
		id: "thu",
		name: "THU",
		fullName: "Thursday",
		subtitle: "Active Recovery or Cardio",
		type: "Cardio",
		warmup: [
			{ name: "Light jog in place", detail: "2 min" },
			{ name: "Leg swings", detail: "1 min/leg" },
			{ name: "Arm circles", detail: "1 min" },
		],
		exercises: [
			{ name: "Option A: Bike ride", detail: "30-45 min, moderate" },
			{ name: "Option B: Basketball pickup game", detail: "Full game" },
			{ name: "Option C: Brisk walk or light jog", detail: "30 min" },
			{
				name: "Option D: Mobility drills",
				detail: "Hip openers, ankle circles",
			},
		],
		cooldown: [
			{ name: "Standing Quad Stretch", detail: "30 sec/side" },
			{ name: "Hamstring Stretch", detail: "30 sec/side" },
			{ name: "Calf Stretch", detail: "30 sec/side" },
			{ name: "Deep breathing", detail: "1 min" },
		],
		note: "Choose any one or mix options based on energy level.",
	},
	{
		id: "fri",
		name: "FRI",
		fullName: "Friday",
		subtitle: "Full Body Strength & Endurance",
		type: "Full Body",
		warmup: [
			{ name: "Jumping jacks", detail: "1 min" },
			{ name: "Bodyweight lunges", detail: "5 reps/leg" },
			{ name: "Arm circles", detail: "1 min" },
			{ name: "Torso twists", detail: "1 min" },
		],
		exercises: [
			{ name: "Goblet Squats", detail: "3 × 12 reps" },
			{ name: "Lunges", detail: "3 × 10 reps/leg" },
			{ name: "Incline Push-Ups", detail: "3 × 12 reps" },
			{ name: "Superman Hold", detail: "3 × 20-30 sec" },
			{ name: "Dumbbell Deadlifts", detail: "3 × 10 reps" },
			{ name: "Burpees", detail: "3 × 8 reps" },
			{ name: "Side Plank", detail: "3 × 20 sec/side" },
		],
		cooldown: [
			{ name: "Seated Forward Fold", detail: "1 min" },
			{ name: "Butterfly Stretch", detail: "1 min" },
			{ name: "Supine Twist", detail: "1 min/side" },
			{ name: "Deep breathing", detail: "1 min" },
		],
	},
	{
		id: "sat",
		name: "SAT",
		fullName: "Saturday",
		subtitle: "Cardio & Core",
		type: "Cardio",
		warmup: [
			{ name: "High knees", detail: "1 min" },
			{ name: "Butt kicks", detail: "1 min" },
			{ name: "Arm circles", detail: "1 min" },
			{ name: "Torso twists", detail: "1 min" },
		],
		exercises: [
			{ name: "Jump Rope or High Knees", detail: "3 × 1 min" },
			{ name: "Mountain Climbers", detail: "3 × 30 sec" },
			{ name: "Plank to Shoulder Taps", detail: "3 × 10 reps/side" },
			{ name: "Leg Raises", detail: "3 × 12 reps" },
			{ name: "Russian Twists", detail: "3 × 15 reps/side" },
			{ name: "Bike Ride or Walk", detail: "30-45 min" },
		],
		cooldown: [
			{ name: "Standing Quad Stretch", detail: "30 sec/side" },
			{ name: "Seated Forward Fold", detail: "1 min" },
			{ name: "Cobra Stretch", detail: "30 sec" },
			{ name: "Deep breathing", detail: "1 min" },
		],
	},
	{
		id: "sun",
		name: "SUN",
		fullName: "Sunday",
		subtitle: "Rest or Gentle Mobility",
		type: "Rest",
		warmup: [
			{ name: "Light walking", detail: "2 min" },
			{ name: "Neck/shoulder rolls", detail: "1 min" },
			{ name: "Gentle torso twists", detail: "1 min" },
		],
		exercises: [
			{ name: "Light stretching or yoga", detail: "20-30 min" },
			{ name: "Foam rolling (if available)", detail: "As needed" },
		],
		cooldown: [
			{ name: "Child's Pose", detail: "1 min" },
			{ name: "Knees-to-Chest", detail: "1 min" },
			{ name: "Deep breathing", detail: "2 min" },
		],
		note: "All workout items are optional today. Rest is part of the program.",
	},
];

let state = JSON.parse(localStorage.getItem("workoutState") || "null") || {
	currentDay: 0,
	completedDays: [],
	checkedItems: {},
};

function save() {
	localStorage.setItem("workoutState", JSON.stringify(state));
}

function resetAll() {
	if (confirm("Reset all progress?")) {
		state = { currentDay: 0, completedDays: [], checkedItems: {} };
		save();
		render();
	}
}

function buildNav() {
	const nav = document.getElementById("dayNav");
	nav.innerHTML = days
		.map((d, i) => {
			const done = state.completedDays.includes(i);
			const active = state.currentDay === i;
			return `<button class="day-btn ${active ? "active" : ""} ${done ? "done" : ""}" onclick="selectDay(${i})">
      <span class="day-name">${d.name}</span>
      <span class="day-type">${d.type}</span>
      <span class="day-check">${done ? "✓" : ""}</span>
    </button>`;
		})
		.join("");
}

function buildViews() {
	const container = document.getElementById("workoutViews");
	container.innerHTML = days
		.map((d, i) => {
			const checks = state.checkedItems[i] || {};
			const warmupHTML = d.warmup
				.map((ex, j) => {
					const key = `w-${j}`;
					return `<div class="warmcool-item ${checks[key] ? "checked" : ""}" onclick="toggleItem(${i}, '${key}', this)">
        <div class="exercise-check">${checks[key] ? "✓" : ""}</div>
        <span class="warmcool-name">${ex.name}</span>
        <span class="warmcool-time">${ex.detail}</span>
      </div>`;
				})
				.join("");

			const exHTML = d.exercises
				.map((ex, j) => {
					const key = `e-${j}`;
					return `<div class="exercise-item ${checks[key] ? "checked" : ""}" onclick="toggleItem(${i}, '${key}', this)">
        <div class="exercise-check">${checks[key] ? "✓" : ""}</div>
        <span class="exercise-name">${ex.name}</span>
        <span class="exercise-detail">${ex.detail}</span>
      </div>`;
				})
				.join("");

			const coolHTML = d.cooldown
				.map((ex, j) => {
					const key = `c-${j}`;
					return `<div class="warmcool-item ${checks[key] ? "checked" : ""}" onclick="toggleItem(${i}, '${key}', this)">
        <div class="exercise-check">${checks[key] ? "✓" : ""}</div>
        <span class="warmcool-name">${ex.name}</span>
        <span class="warmcool-time">${ex.detail}</span>
      </div>`;
				})
				.join("");

			const isDone = state.completedDays.includes(i);
			return `<div class="workout-view ${state.currentDay === i ? "visible" : ""}" id="view-${i}">
      <div class="day-header">
        <div>
          <div class="day-title">${d.fullName}</div>
          <div class="day-subtitle">${d.subtitle}</div>
          ${d.note ? `<div style="font-size:12px;color:var(--muted);margin-top:8px;font-style:italic">${d.note}</div>` : ""}
        </div>
        <button class="complete-day-btn ${isDone ? "done" : ""}" onclick="completeDay(${i})">
          ${isDone ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div class="section-block">
        <div class="section-label">Warm-Up</div>
        <div class="warmcool-list">${warmupHTML}</div>
      </div>

      <div class="section-block">
        <div class="section-label">Workout</div>
        <div class="exercise-list">${exHTML}</div>
      </div>

      <div class="section-block">
        <div class="section-label">Cool Down</div>
        <div class="warmcool-list">${coolHTML}</div>
      </div>
    </div>`;
		})
		.join("");
}

function selectDay(i) {
	state.currentDay = i;
	save();
	document.querySelectorAll(".workout-view").forEach((v, idx) => {
		v.classList.toggle("visible", idx === i);
	});
	document.querySelectorAll(".day-btn").forEach((b, idx) => {
		b.classList.toggle("active", idx === i);
	});
}

function toggleItem(dayIdx, key, el) {
	if (!state.checkedItems[dayIdx]) state.checkedItems[dayIdx] = {};
	const cur = state.checkedItems[dayIdx][key];
	state.checkedItems[dayIdx][key] = !cur;
	el.classList.toggle("checked", !cur);
	const check = el.querySelector(".exercise-check");
	check.textContent = !cur ? "✓" : "";
	save();
}

function completeDay(i) {
	if (!state.completedDays.includes(i)) {
		state.completedDays.push(i);
	} else {
		state.completedDays = state.completedDays.filter((d) => d !== i);
	}
	save();
	updateProgress();
	buildNav();
	// Update just the button
	const btn = document.querySelector(`#view-${i} .complete-day-btn`);
	const done = state.completedDays.includes(i);
	btn.textContent = done ? "✓ Completed" : "Mark Complete";
	btn.classList.toggle("done", done);
}

function updateProgress() {
	const count = state.completedDays.length;
	document.getElementById("progressCount").textContent = count;
	document.getElementById("progressFill").style.width = (count / 7) * 100 + "%";
}

function render() {
	buildNav();
	buildViews();
	updateProgress();
}

render();

// Auto-select today
const todayMap = [1, 2, 3, 4, 5, 6, 0]; // Mon=1...Sun=0
const today = new Date().getDay();
const dayIdx = todayMap.indexOf(today);
if (dayIdx >= 0 && state.currentDay === 0) {
	// only auto-select if user hasn't manually chosen
}
