import cafe from './images/cafe.jpg';

const contactText = '<p> 23653 Calabasas Road<br>Calabasas, CA 91302\n<br><strong>Phone:</strong> 818.591.2223<br><strong>Fax:</strong> 818.591.2828<br><strong>Email:</strong> contactL@roquesbakery.com<br></p>';

const contactSection = () => {
  const divContact = document.createElement('div');

  // Set H1
  const menuHeading = document.createElement('h1');
  menuHeading.innerText = '/-----       Book your Visit        -----/';
  divContact.prepend(menuHeading);

  // Family Image
  const cafePicture = new Image();
  cafePicture.src = cafe;
  cafePicture.id = 'cafe';
  cafePicture.setAttribute('width', '300px');
  divContact.append(cafePicture);

  // Set P
  const contactParagraph = document.createElement('div');
  contactParagraph.innerHTML = contactText;
  divContact.append(contactParagraph);

  return divContact;
};

export default contactSection;