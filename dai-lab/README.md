# DAI-Lab Setup & Usage

## 1. Environment Setup

It’s recommended to create a fresh Python environment. Install transformers, accelerate, as well as the Triton kernels for MXFP4 compatibility:

```bash
pip install -U transformers accelerate torch triton==3.4 kernels
```

(Optional) Enable multi-GPU:
If you’re running large models, use Accelerate or torchrun to handle device mapping automatically.

## 2. Launch Server

To launch a server, simply use the transformers serve CLI command:

```bash
transformers serve
```

The simplest way to interact with the server is through the transformers chat CLI:

```bash
transformers chat localhost:8000 --model-name-or-path openai/gpt-oss-20b
```

or by sending an HTTP request with cURL:

```bash
curl -X POST http://localhost:8000/v1/responses \
-H "Content-Type: application/json" \
-d '{"messages": [{"role": "system", "content": "hello"}], "temperature": 0.9, "max_tokens": 1000, "stream": true, "model": "openai/gpt-oss-20b"}'
```

## 3. Scripts

The `scripts/` directory contains examples for:
- `simple_inference.py`: Quick inference using pipelines.
- `advanced_inference.py`: Manual control using `.generate()`.
- `chat_template.py`: Using chat templates.
- `harmony_example.py`: Using the `openai-harmony` library.
- `distributed_inference.py`: Multi-GPU setup.
