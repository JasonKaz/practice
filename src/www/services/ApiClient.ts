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
    public static getSpecDetails(name: string): Promise<Response> {
        return fetch(`/spec-details/${name}`);
    }
}

export { ApiClient };
