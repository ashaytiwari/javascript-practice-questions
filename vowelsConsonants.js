function countVowelsConsonantsFromString(string) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0, consonantsCount = 0;

  for (let char of string) {

    if (vowels.includes(char.toLowerCase())) {
      vowelsCount += 1;
    } else if (char.trim() !== '') {
      consonantsCount += 1;
    }

  }

  console.log(`Vowels count: ${vowelsCount} and Consonants count: ${consonantsCount}`);
}

countVowelsConsonantsFromString('Ashay');