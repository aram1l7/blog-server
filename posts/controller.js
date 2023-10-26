const client = require("../contentful");

const getAll = async (req, res) => {
  try {
    const entries = await client.getEntries({
      select: "fields",
      content_type: "blogPost",
    });

    const items = entries.items.map((ele) => {
      const { description, ...rest } = ele.fields;
      return {
        ...rest,
        image: ele.fields.image.fields.file.url,
        id: ele.sys.id,
      };
    });
    return res.status(200).json(items);
  } catch (e) {
    console.log(e, "e");
    return res.status(400).json(e);
  }
};
const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const entry = await client.getEntry(id);
    const data = {
      ...entry.fields,
      image: entry.fields.image.fields.file.url,
    };
    return res.status(200).json(data);
  } catch (e) {
    console.log(e, "e");
    return res.status(400).json(e);
  }
};

module.exports = { getAll, getById };
