const allSymptoms = new Set();
diseases.forEach(disease => disease.symptoms.forEach(symptom => allSymptoms.add(symptom)));

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    const lastSymptom = value.split(',').pop().trim();

    if (lastSymptom) {
        const filteredSymptoms = Array.from(allSymptoms).filter(symptom => 
            symptom.toLowerCase().includes(lastSymptom.toLowerCase())
        );
        filteredSymptoms.forEach(symptom => {
            const div = document.createElement('div');
            div.textContent = symptom;
            div.onclick = () => {
                const input = document.getElementById('symptoms');
                const inputValue = input.value.split(',');
                inputValue.pop();
                inputValue.push(symptom);
                input.value = inputValue.join(', ') + ', ';
                suggestions.innerHTML = '';
                input.focus();
            };
            suggestions.appendChild(div);
        });
    }
}

function diagnose() {
    const age = document.getElementById('age').value;
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase();
    const symptoms = symptomsInput.split(',').map(symptom => symptom.trim()).filter(symptom => symptom);

    const results = diseases.filter(disease => {
        const ageMatch = (disease.age_of_onset === "All ages") || 
                         (disease.age_of_onset.includes('Typically') && parseInt(age) >= parseInt(disease.age_of_onset.match(/\d+/))) ||
                         (parseInt(age) >= parseInt(disease.age_of_onset.split(' ')[0]) && parseInt(age) <= parseInt(disease.age_of_onset.split(' ')[2]));
        const symptomsMatch = symptoms.every(symptom => disease.symptoms.map(s => s.toLowerCase()).includes(symptom));
        return ageMatch && symptomsMatch;
    });

    displayResults(results);
}

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';

    if (results.length === 0) {
        resultsSection.innerHTML = '<p>No matching diseases found.</p>';
    } else {
        results.forEach(disease => {
            const diseaseDiv = document.createElement('div');
            diseaseDiv.classList.add('disease');

            const diseaseName = document.createElement('h2');
            diseaseName.textContent = disease.disease;
            diseaseDiv.appendChild(diseaseName);

            const diseaseDescription = document.createElement('p');
            diseaseDescription.textContent = disease.description;
            diseaseDiv.appendChild(diseaseDescription);

            const diseaseSymptoms = document.createElement('p');
            diseaseSymptoms.innerHTML = `<strong>Symptoms:</strong> ${disease.symptoms.join(', ')}`;
            diseaseDiv.appendChild(diseaseSymptoms);

            const diseaseMedications = document.createElement('p');
            diseaseMedications.innerHTML = `<strong>Medications:</strong> ${disease.medication.join(', ')}`;
            diseaseDiv.appendChild(diseaseMedications);

            resultsSection.appendChild(diseaseDiv);
        });
    }
}
