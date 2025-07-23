function status(request, response) {
  response.status(200).json({ chave: "primeiro response" });
}

export default status;
