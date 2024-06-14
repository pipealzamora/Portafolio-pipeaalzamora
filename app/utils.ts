// Within the utils.ts file
export const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const suffixes = ["th", "st", "nd", "rd"];
    const suffix = suffixes[(day - 1) % 10 > 3 ? 0 : (day - 1) % 10];
    const months = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec.",
    ];
    const month = months[monthIndex];
    return `${day}${suffix} ${month} ${year}`;
};
//👇🏻 Create a unique slug from posts' titles
export const slugifySentences = (sentence: string): string => {
    // Remove special characters and replace spaces with hyphens
    const slug = sentence
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
    // Generate 5 random letters
    const randomLetters = Array.from({ length: 5 }, () =>
        String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join("");
    return `${slug}-${randomLetters}`;
};

