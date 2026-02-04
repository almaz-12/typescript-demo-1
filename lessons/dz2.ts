// В этой лекции мы научимся переводить функции из JavaScript в TypeScript, сосредоточив внимание на типизации как объектов, так и функций.

/* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]

enum QStatus {
  published = 'published',
  draft = 'draft',
  deleted = 'deleted',
};

async function getFaqs(req: {
    topicId: number,
    status?: QStatus
  }): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: QStatus,
  }[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}


getFaqs({"topicId": 5, "status": QStatus.published});