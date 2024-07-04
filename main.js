const element = document.getElementById('phone');

const maskOptions ={
    mask: [
      {
        mask: '+1 (000) 000-0000',
        startsWith: '1' || '+1',
        lazy: false,
        country: 'USA, Canada'
      },      
      {
        mask: '+00 (0) 0000-0000',
        startsWith: '61' || '61',
        lazy: false,
        country: 'Australia'
      },
      {
        mask: '+44 (00) 0000-0000',
        startsWith: '44' || '+44',
        lazy: false,
        country: 'The Great Britian'
      },
      {
        mask: '+64 (00) 0000-0000',
        startsWith: '64' || '+64',
        lazy: false,
        country: 'new Zealand'
      },
      {
        mask: '+353 (00) 000-0000',
        startsWith: '353' || '+353',
        lazy: false,
        country: 'Ireland'
      },
      {
        mask: '+27 (00) 000-0000',
        startsWith: '27' || '+27',
        lazy: false,
        country: 'South Africa'
      },
      {
        mask: '+91 (00) 0000-0000',
        startsWith: '91' || '+91',
        lazy: false,
        country: 'India'
      },
      {
        mask: '+65 0000-0000',
        startsWith: '65' || '+65',
        lazy: false,
        country: 'Singapore'
      },
      {
        mask: '+60 (0) 0000-0000',
        startsWith: '60' || '+60',
        lazy: false,
        country: 'Singapore'
      },

      {
        mask: '0000000000000',
        startsWith: '',
        country: 'unknown'
      }   
    ],
    dispatch: (appended, dynamicMasked) => {
      const number = (dynamicMasked.value + appended).replace(/\D/g,'');
  
      return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0);
    }
  }
const mask = IMask(element, maskOptions)
