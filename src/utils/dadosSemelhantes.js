export const dadosSemelhantes =  [ {
    input_data: {
      input_string: [
        {
          role: "user",
          content: "Quais são os efeitos colaterais do medicamento dipirona?"
        },
        {
          role: "assistant",
          content: "Os efeitos colaterais comuns do medicamento dipirona incluem náusea, dor de cabeça e sonolência."
        },
        {
          role: "user",
          content: "Qual é o preço do medicamento dipirona?"
        },
        {
          role: "assistant",
          content: "O preço do medicamento dipirona varia dependendo da quantidade e da forma de apresentação. Você pode verificar o preço atualizado na nossa plataforma online."
        }
      ],
      parameters: {
        temperature: 0.6,
        top_p: 0.9,
        do_sample: true,
        max_new_tokens: 200
      }
    }
  }
];