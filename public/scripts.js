document.addEventListener('DOMContentLoaded', function() {
  const symptomsList = [
    "Fever", "Chills", "Cough", "Sore throat", "Runny nose", "Muscle aches",
    "Increased thirst", "Frequent urination", "Unintended weight loss", "Fatigue", "Blurred vision",
    "Headaches", "Shortness of breath", "Nosebleeds", "Chest tightness", "Wheezing", "Memory loss",
    "Confusion", "Difficulty planning", "Personality changes", "Joint pain", "Swelling", "Stiffness",
    "Persistent sadness", "Loss of interest", "Changes in appetite", "Sleep disturbances", "Bone pain",
    "Loss of height", "Stooped posture"
  ];

  const symptomsListDiv = document.getElementById('symptoms-list');

  symptomsList.forEach(symptom => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = symptom;
    checkbox.name = 'symptoms';
    checkbox.value = symptom;
    checkbox.classList.add('symptom-checkbox');

    const label = document.createElement('label');
    label.htmlFor = symptom;
    label.appendChild(document.createTextNode(symptom));

    const div = document.createElement('div');
    div.classList.add('symptom-item');
    div.appendChild(checkbox);
    div.appendChild(label);

    symptomsListDiv.appendChild(div);
  });

  document.getElementById('diagnosisForm').onsubmit = function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const checkedBoxes = document.querySelectorAll('input[name="symptoms"]:checked');
    const symptoms = Array.from(checkedBoxes).map(cb => cb.value);

    fetch('http://localhost:3000/get_diseases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ age: age, symptoms: symptoms }),
    })
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';

      if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No matching diseases found.</p>';
      } else {
        data.forEach(disease => {
          const diseaseDiv = document.createElement('div');
          diseaseDiv.classList.add('disease');

          diseaseDiv.innerHTML = `
            <h2>${disease.disease}</h2>
            <p><strong>Symptoms:</strong> ${disease.symptoms.join(', ')}</p>
            <p><strong>Medicines:</strong> ${disease.medication.join(', ')}</p>
          `;

          resultsDiv.appendChild(diseaseDiv);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };
});
