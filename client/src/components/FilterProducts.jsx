import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, resetFilter } from '../redux/actions/actions';

function Filter() {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedPlatforms, setSelectedPlatforms] = useState([]);
	const [selectedPrices, setSelectedPrices] = useState([]);
	const [selectedLicenses, setSelectedLicenses] = useState([]);

	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(
			filterProducts(
				selectedCategories,
				selectedPlatforms,
				selectedPrices,
				selectedLicenses,
			),
		);
	}, [
		selectedCategories,
		selectedPlatforms,
		selectedPrices,
		selectedLicenses,
		dispatch,
	]);

	// Extraer opciones únicas de las propiedades de los productos
	const categories = Array.from(
		new Set(
			allProducts.flatMap((product) =>
				product.categories.map((category) => category.name),
			),
		),
	);
	const platforms = Array.from(
		new Set(
			allProducts.flatMap((product) =>
				product.platforms.map((platform) => platform.name),
			),
		),
	);
	const licenses = Array.from(
		new Set(
			allProducts.flatMap((product) =>
				product.licenses.map((license) => license.name),
			),
		),
	);
	const prices = Array.from(
		new Set(allProducts.map((product) => product.price)),
	);

	const handleCategoryChange = (e) => {
		const category = e.target.value;
		const isChecked = e.target.checked;

		setSelectedCategories((prevSelectedCategories) => {
			let updatedCategories;
			if (isChecked) {
				updatedCategories = [...prevSelectedCategories, category];
			} else {
				updatedCategories = prevSelectedCategories.filter(
					(c) => c !== category,
				);
			}
			return updatedCategories;
		});
	};

	const handlePlatformChange = (e) => {
		const platform = e.target.value;
		const isChecked = e.target.checked;

		setSelectedPlatforms((prevSelectedPlatforms) => {
			let updatedPlatforms;
			if (isChecked) {
				updatedPlatforms = [...prevSelectedPlatforms, platform];
			} else {
				updatedPlatforms = prevSelectedPlatforms.filter(
					(p) => p !== platform,
				);
			}
			return updatedPlatforms;
		});
	};

	const handlePriceChange = (e) => {
		const price = parseFloat(e.target.value);
		const isChecked = e.target.checked;

		setSelectedPrices((prevSelectedPrices) => {
			let updatedPrices;
			if (isChecked) {
				updatedPrices = [...prevSelectedPrices, price];
			} else {
				updatedPrices = prevSelectedPrices.filter((p) => p !== price);
			}
			return updatedPrices;
		});
	};

	const handleLicenseChange = (e) => {
		const license = e.target.value;
		const isChecked = e.target.checked;

		setSelectedLicenses((prevSelectedLicenses) => {
			let updatedLicenses;
			if (isChecked) {
				updatedLicenses = [...prevSelectedLicenses, license];
			} else {
				updatedLicenses = prevSelectedLicenses.filter(
					(l) => l !== license,
				);
			}
			return updatedLicenses;
		});
	};
	const handleDeletFilters = (e) => {
		e.preventDefault();
		setSelectedCategories([]);
		setSelectedPlatforms([]);
		setSelectedPrices([]);
		setSelectedLicenses([]);
		dispatch(resetFilter());
	};
	return (
		<div>
			<h2>Categorias</h2>
			{categories.map((category) => (
				<label key={category}>
					<input
						type='checkbox'
						value={category}
						checked={selectedCategories.includes(category)}
						onChange={handleCategoryChange}
					/>
					{category}
				</label>
			))}
			<h2>Plataformas</h2>
			{platforms.map((platform) => (
				<label key={platform}>
					<input
						type='checkbox'
						value={platform}
						checked={selectedPlatforms.includes(platform)}
						onChange={handlePlatformChange}
					/>
					{platform}
				</label>
			))}
			<h2>Precios</h2>
			{prices.map((price) => (
				<label key={price}>
					<input
						type='checkbox'
						value={price}
						checked={selectedPrices.includes(price)}
						onChange={handlePriceChange}
					/>
					{price}
				</label>
			))}
			<h2>Licencias</h2>
			{licenses.map((license) => (
				<label key={license}>
					<input
						type='checkbox'
						value={license}
						checked={selectedLicenses.includes(license)}
						onChange={handleLicenseChange}
					/>
					{license}
				</label>
			))}
			<div>
				<button type='button' onClick={handleDeletFilters}>
					Eliminar Filtros
				</button>
			</div>
		</div>
	);
}

export default Filter;