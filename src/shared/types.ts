export enum SelectedPage {
  Home = "home",
  MyProjects = "myprojects",
  OurClasses = "ourclasses",
  ContactMe = "contactme",
}

export interface ProjectType {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
