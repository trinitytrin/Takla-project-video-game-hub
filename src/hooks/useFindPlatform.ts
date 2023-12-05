import usePlatforms from "./usePlatforms";

const useFindPlatform  = (id?: number) => {
    const { data, error } = usePlatforms();
    return data?.results.find(p => p.id === id);
}

export default useFindPlatform;