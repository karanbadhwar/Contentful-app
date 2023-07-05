import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import * as contentful from "contentful";

const client = createClient({
  space: "kfaxqkd9cp0o",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

type ProjetcsType = {
  contentTypeId: "projetcs";
  title: contentful.EntryFields.Text;
  url: contentful.EntryFields.Text;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
};
interface IProjects {
  title: string;
  url: string;
  id: string;
  img: string;
}

export const useFetchProjetcs = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<IProjects[]>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries<ProjetcsType>({
        content_type: "projetcs",
      });
      // console.log(response);
      const Projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;
        const id = item.sys.id;
        return {
          title,
          url,
          id,
          img,
        };
      });
      setProjects(Projects);
      setLoading(false);
    } catch (error) {
      console.log("Error!!!");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(projects);
  return { loading, projects };
};
