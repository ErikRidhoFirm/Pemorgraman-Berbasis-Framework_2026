import { useRouter } from "next/router";

const halamanCategory = () => {
    // const Router = useRouter;
    // console.log(Router);
    const { query } = useRouter();
    const { slug } = query;
    return (
        <div>
            <h1> Halaman Category</h1>
            <p>Category: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}</p>
            <p>Kategori: {slug ? slug[0]: "Semua Kategori"}</p>
        </div>
    );
};

export default halamanCategory;