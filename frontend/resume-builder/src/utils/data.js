import TEMPLATE_ONE_IMG from "../assets/TEMPLATE_ONE_IMG.png";
import TEMPLATE_TWO_IMG from "../assets/TEMPLATE_TWO_IMG.png";
import TEMPLATE_THREE_IMG from "../assets/TEMPLATE_THREE_IMG.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
    themeOne: [
        ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],
        ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
        ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
        ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
        ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
        ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

        ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
        ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
        ["#F9FCFF", "#E3F0F9", "#CDDDEE", "#6CA6CF", "#46545E"],
        ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
        ["#EFFCFC", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

        ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
        ["#E3F2FD", "#90CAF9", "#A8D2F4", "#1E88E5", "#0D47A1"],
    ],
};
export const DUMMY_RESUME_DATA = {
    title: "DevOps Engineer Resume",
    thumbnailLink: "",

    profileInfo: {
        profileImg: "",
        profilePreviewUrl: "",
        fullName: "Ram Kumar",
        designation: "DevOps Engineer",
        summary:
            "DevOps Engineer with experience in CI/CD pipelines, Docker, and cloud platforms. Focused on automation, scalability, and improving system reliability.",
    },

    template: {
        theme: "themeOne",
        colorPalette: "themeOne",
    },

    contactInfo: {
        email: "ram@example.com",
        phone: "+91 9876543210",
        location: "Hyderabad, India",
        linkedin: "https://linkedin.com/in/ram",
        github: "https://github.com/ram",
        website: "https://ram.dev",
    },

    workExperience: [
        {
            company: "Tech Solutions Pvt Ltd",
            role: "Junior DevOps Engineer",
            startDate: "2023-01",
            endDate: "2025-01",
            description:
                "Built CI/CD pipelines using Jenkins, containerized applications with Docker, and deployed services on AWS.",
        },
    ],

    education: [
        {
            degree: "B.Tech in Computer Science",
            institution: "XYZ University",
            startDate: "2019-06",
            endDate: "2023-05",
        },
    ],

    skills: [
        { name: "Docker", progress: 85 },
        { name: "Kubernetes", progress: 70 },
        { name: "AWS", progress: 80 },
        { name: "Jenkins", progress: 75 },
    ],

    projects: [
        {
            title: "CI/CD Pipeline Automation",
            description:
                "Implemented automated CI/CD pipelines using Jenkins and Docker for faster deployments.",
            github: "https://github.com/ram/cicd-project",
            liveDemo: "",
        },
    ],

    certifications: [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon",
            year: "2024",
        },
    ],

    languages: [
        { name: "English", progress: 90 },
        { name: "Hindi", progress: 80 },
    ],

    interests: ["Cloud Computing", "Open Source", "Automation"],
};