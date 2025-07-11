const useProduct = () => {
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useProduct;
