export const EditTechModal = () => {
    return (
        <div>
            <div role="dialog">

                <form>
                    <div>
                        <h3>Cadastrar tecnologia</h3>
                        <button>FECHAR</button>
                    </div>

                    <div>
                        <p>nome</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>nome</p>
                        <select name="status">
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediário">Intermediário</option>
                            <option value="avançado">Avançado</option>
                        </select>
                    </div>

                    <button type="submit">Salvar alterações</button>
                </form>
            </div>
        </div>
    )
}