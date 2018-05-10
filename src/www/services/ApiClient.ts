/**
 * Class to interact with the server API
 */
class ApiClient {
    /**
     * Gets all available specs
     */
    public static async getSpecs(): Promise<string[]> {
        return fetch("/specs").then((res: Response) => res.json());
    }

    /**
     * Runs a given spec by it's name
     * @param name
     */
    public static runSpec(name: string): void {
        fetch(`/run-test/${name}`);
    }

    /**
     * Gets a specs details
     * @param name
     */
    public static async getSpecDetails(name: string): Promise<string> {
        return fetch(`/spec-details/${name}`).then((val: Response) => val.text());
    }
}

export { ApiClient };
