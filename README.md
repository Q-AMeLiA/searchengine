# This repository and the search engine developed is an outcome of the project Quality Assurance of Machine Learning Applications (Q-AMeLiA).
The goal of the project is to support Small and medium-sized enterprises (SME's) in the process of the special machine learning software development life cycle (ML-SDLC) and to develop quality indicators that are important in this process. 
In total five SME's namely competition it-management GmbH, Inferics GmbH, C.R.S. iiMotion GmbH, tepcon GmbH, and schrempp edv GmbH collaborate with three universities namely Hochschule Furtwangen, Hochschule Karlsruhe, and Hochschule Offenburg attempt to develop suitable tools to evaluate the data quality in terms of representative coverage of the feature space as well as to evaluate the quality of the learned AI model achieved in the learning process. 
This safeguards the product risk of the manufacturer of AI-based products and assures the customer of a quantified performance of the products concerning the decision-making of the AI. 
More about the project can be found on the project website (https://q-amelia.in.hs-furtwangen.de/).

# Find My CNN: Search Engine for ML models
One of the major difficulties often faced by ML practitioners is the lack of large amounts of high quality training data that is required to train deep learning models from scratch. *Transfer Learning* research is dedicated at solving this problem, by pretraining models on large upstream datasets to learn generic visual representations and, thereupon, finetune the parameters to the smaller downstream dataset. Typically, this results in significant boosts of performance, especially with extremely small datasets. Today, many pretrained models are shared publicly for various tasks, domains, and network architectures. 
It is hard to impossible to predict the transfer learning performance and, therefore, selecting the right pretrained model for an individual problem is a painfull, time-consuming trial and error process, that many SME's cannot afford.

There is not a single model database across various domains which could provide a starting point to SME's when applying ML for the first time and with limited budget. With this search-engine we aim at reducing the time-to-deployment for SME's and cutting their budget by helping them in their early development life cycles.

## Version 1: Reduction of Model Search Space

Looks up pretrained models by leveraging user-provided basic meta information such as training task, visual domain, architecture, input size, number of params etc. There is no guarantee that the shown models will transfer well to the users dataset, nor that the found subset is the best.

## Version 2: Model Recommendation

Suggests pretrained models based on a user-provided slice of the downstram dataset. The suggestions are **expected to perform well** on the full downstream dataset.
