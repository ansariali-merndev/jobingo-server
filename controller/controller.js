export const getHome = (req, res) => {
  res.json({
    message: "Hello Express Working",
  });
};

export const addJob = async (req, res) => {
  const {
    recruiterEmail,
    recruiterClerkId,
    title,
    description,
    company,
    location,
    skills,
  } = req.body;
  await PostJobModal.create({
    recruiterEmail,
    recruiterClerkId,
    title,
    description,
    company,
    location,
    skills,
  });
  res.json({
    message: "success",
  });
};
