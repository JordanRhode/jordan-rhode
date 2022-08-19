import { useReducer, useState } from 'react';
import Tesseract from 'tesseract.js';
import { pageview } from 'react-ga';
import classNames from 'classnames';

const allergens = [
	'diphenylguanidine',
	'1,3-diphenylguanidine',
	"n,n'-diphenylguanidine",
	'zincdibutyldithiocarbamate',
	'bis(n,n-dibutyldithiocarbamato)zinc',
	'carbamicaciddibutyldithio',
	'zinccomplex',
	'zincbis(dibutyldithiocarbamate)',
	'zincbis',
	'dibutyldithiocarbamate',
	'zincdiethyldithiocarbamate',
	'diethyldithiocarbamicacidzincsalt',
	'diethyldithiocarbamate',
	'zincdiethylcarbamodithioate',
	'casrn',
	'102-06-7',
	'14324-55-1',
	'136-23-2',
	'balsamofperu',
	'balsamperu',
	'carba',
	'carbamix',
	'decylglucoside',
	'decyl',
	'dodecylgallate',
	'dodecyl',
	'iodopropynylbutylcarbamate',
	'iodopropynyl',
	'linalool',
	'n,n-diphenylguanidine',
	'diphenylguanidine',
	'octylsalicylate',
	'octyl',
	'propylgallate',
	'gallate',
	'propyleneglycol',
	'propylene',
	'sorbitansesquioleate',
	'sorbitan',
	'sesquioleate',
	'thimerosal',
	'decyld-glucopyranoside',
	'd-glucopyranoside',
	'glucopyranoside',
	'decylglucoside',
	'glucoside',
	'eugenol',
	'isoeugenol',
	'benzoin',
	'benzoicacid',
	'benzoic',
	'benzylalcohol',
	'benzyl',
	'rosin',
	'colophony',
	'citrusfruitpeel',
	'citruspeel',
	'tigerbalm',
	'vanilla',
	'balsamoftolu',
	'tolu',
];

export default function LabelScanner() {
	document.title = 'Scan | JR';
	pageview(window.location.pathname);

	const [imagePath, setImagePath] = useState('');
	const [text, setText] = useState('');
	const [anyFoundText, setAnyFoundText] = useState('');
	const [showAllergens, toggleShowAllergens] = useReducer((state) => !state, false);

	const handleClick = () => {
		if (!imagePath) return;

		Tesseract.recognize(imagePath, 'eng', {
			logger: (m) => setText('Status: ' + m.status + ', Progress: ' + m.progress * 100),
		})
			.catch((err) => {
				console.error(err);
			})
			.then((result) => {
				if (!result) return;

				setText('Image result: ' + result.data.text);

				const allergensFound: string[] = [];
				allergens.forEach((allergen) => {
					const response = String(result.data.text).replace(/\s/g, '');
					if (response.toLocaleLowerCase().includes(allergen)) {
						allergensFound.push(allergen);
					}
				});

				if (allergensFound.length > 0) {
					setAnyFoundText('Allergens Found: ' + allergensFound.join(', '));
				} else {
					setAnyFoundText('No allergens found');
				}
			});
	};

	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-col place-self-center mt-2 mb-2 gap-2 text-lg">
				<div className="rounded-full bg-theme-cream min-w-52 lg:w-96 relative text-center text-theme-blue">
					<input
						id="ls-image-input"
						type="file"
						className="opacity-0 absolute w-full cursor-pointer left-0"
						onInput={(e) => {
							const target = e.target as HTMLInputElement;
							if (!target?.files) return;
							return setImagePath(URL.createObjectURL(target.files[0]));
						}}
						accept="image/*"></input>
					<label htmlFor="ls-image-input">Select Image</label>
				</div>
				<div className="flex flex-row min-w-52 lg:w-96 gap-2">
					<button
						onClick={handleClick}
						className={classNames(
							'rounded-full w-1/2',
							imagePath === '' ? 'bg-gray-400 cursor-default text-theme-blue' : 'bg-theme-cream text-theme-blue'
						)}>
						Process
					</button>
					<button onClick={toggleShowAllergens} className="rounded-full bg-theme-cream w-1/2 text-theme-blue">
						Toggle Allergens
					</button>
				</div>
			</div>
			<img src={imagePath} className="w-[50%] h-auto self-center" />
			<div className="self-center">{anyFoundText}</div>
			<div className="self-center w-2/3">{text}</div>
			<p className={showAllergens === false ? 'hidden' : 'self-center w-2/3'}>{'Allergens: ' + allergens.join(', ')}</p>
		</div>
	);
}
